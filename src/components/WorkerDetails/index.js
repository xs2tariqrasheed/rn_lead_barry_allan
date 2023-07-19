import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { updateWorkerDetails, deleteWorker, updateWorkerFortnox } from '../../api/admin.api';
import { Button } from '../common';
import { styles } from './style';
import { PINK, PEACH } from '../../constants/colors';
import { MANAGE_WORKERS_SCREEN } from '../../constants/screens';
import BrookeDinja from '../../components/Modals/BrookeDinja';
import RoleModal from '../../components/Modals/RoleModal';
import StatusChangeModal from '../../components/Modals/StatusChangeModal';
import ZoneChangeModal from '../../components/Modals/ZoneChangeModal';
import DeleteModal from '../../components/Modals/DeleteModal';
import MessageModal from '../../components/Modals/MessageModal';
import { zoneRequest } from '../../api/services.api';
import { getUniqZones } from '../../helpers/zonesHelper';

const UserRole = ({ role, setRole, setRoleModal }) => {
  let roleMenu = null;

  const setRoleMenuRef = (ref) => {
    roleMenu = ref;
  };

  const pickRole = (selected) => {
    setRole(selected);
    setRoleModal(true);
    roleMenu.hide();
  };

  return (
    <View>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>
          <Text style={styles.bold}>Roll:</Text> {role}
        </Text>
        <TouchableOpacity onPress={() => roleMenu.show()}>
          <Text style={styles.change}>Ändra</Text>
        </TouchableOpacity>
      </View>

      <Menu ref={setRoleMenuRef} style={styles.menu}>
        <MenuItem onPress={() => pickRole('Fixare')}>
          <View style={styles.itemContainer}>
            <Text
              style={[styles.menuItem, role === 'Fixare' && styles.pinkText]}
            >
              Fixare
            </Text>
          </View>
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={() => pickRole('Ambassador')}>
          <View style={styles.itemContainer}>
            <Text
              style={[
                styles.menuItem,
                role === 'Ambassador' && styles.pinkText,
              ]}
            >
              Ambassador
            </Text>
          </View>
        </MenuItem>
      </Menu>
    </View>
  );
};

const Status = ({ status, setStatus, setStatusChangeModal, hasBookings }) => {
  let statusMenu = null;

  const setStatusMenuRef = (ref) => {
    statusMenu = ref;
  };

  const pickStatus = (selected) => {
    if (hasBookings != 0 && status != 'Inaktiv') {
      setStatusChangeModal(true);
    } else {
      setStatus(selected);
    }
    statusMenu.hide();
  };

  return (
    <View>
      <View style={[styles.statusContainer, { marginTop: '6%' }]}>
        <Text style={styles.status}>
          <Text style={styles.bold}>Status:</Text> {status}
        </Text>
        <TouchableOpacity onPress={() => statusMenu.show()}>
          <Text style={styles.change}>Ändra</Text>
        </TouchableOpacity>
      </View>

      <Menu ref={setStatusMenuRef} style={styles.menu}>
        <MenuItem onPress={() => pickStatus('Aktiv')}>
          <View style={styles.itemContainer}>
            <Text
              style={[styles.menuItem, status === 'Aktiv' && styles.pinkText]}
            >
              Aktiv
            </Text>
          </View>
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={() => pickStatus('Inaktiv')}>
          <View style={styles.itemContainer}>
            <Text
              style={[styles.menuItem, status === 'Inaktiv' && styles.pinkText]}
            >
              Inaktiv
            </Text>
          </View>
        </MenuItem>
      </Menu>
    </View>
  );
};

const Zone = ({ selectedZones, setSelectedZones, allActiveZones }) => {
  let zoneMenu = null;

  const setZoneMenuRef = (ref) => (zoneMenu = ref);

  let selectedZoneHash = {};

  selectedZones.map((z) => (selectedZoneHash[z] = true));

  const pickZone = (clickedZone) => {
    const zoneSet = new Set(selectedZones);

    if (selectedZoneHash[clickedZone]) {
      zoneSet.delete(clickedZone);
    } else {
      zoneSet.add(clickedZone);
    }

    const zoneArray = Array.from(zoneSet);
    setSelectedZones(zoneArray);
  };

  return (
    <>
      <View style={[styles.statusContainer, { marginTop: '6%' }]}>
        <Text style={styles.statusZon}>
          <Text style={styles.bold}>Zon:</Text>{' '}
          {selectedZones.map((z) => z.split('Zon ')[1]).join(',')}
        </Text>
        <TouchableOpacity onPress={() => zoneMenu.show()}>
          <Text style={styles.change}>Ändra</Text>
        </TouchableOpacity>
      </View>

      <Menu ref={setZoneMenuRef} style={styles.menu}>
        <ScrollView style={{ maxHeight: 200 }}>
          {allActiveZones.map((activeZone, index) => (
            <View key={index}>
              <MenuItem onPress={() => pickZone(activeZone)}>
                <View style={styles.itemContainer}>
                  <Text
                    style={
                      selectedZoneHash[activeZone]
                        ? styles.menuItemSelected
                        : styles.menuItem
                    }
                  >
                    {activeZone}
                  </Text>
                </View>
              </MenuItem>
              <MenuDivider />
            </View>
          ))}
        </ScrollView>
      </Menu>
    </>
  );
};
const Fortnox = ({applyFortnox}) => {
  
  return (
    <>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          alignContent: 'center',
          marginTop: '5%',
        }}
      >
        <View style={{ width: '85%', flexDirection: 'row' }}>
          <View style={{ width: '60%' }}>
            <Text style={styles.statusZon}>
              <Text style={styles.bold}>FORTNOX:</Text>
            </Text>
          </View>
          <View
            style={{
              width: '40%',
              alignContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <TouchableOpacity
              style={{
                width: 120,
                height: 28,
                borderRadius: 14,
                backgroundColor: '#A85A58',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => applyFortnox()}
            >
              <Text style={styles.fortnoxText}>Skicka data</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ({ worker }) => {
  const navigation = useNavigation();
  const calculatedZoneArray = React.useMemo(
    () => getUniqZones(worker.zones, 'alias'),
    [worker.zones]
  );

  const [name, setName] = useState(worker.first_name + ' ' + worker.last_name);
  const [address, setAddress] = useState(worker.address);
  const [telephone, setTelephone] = useState(worker.phone_no);
  const [status, setStatus] = useState(worker.active ? 'Aktiv' : 'Inaktiv');
  const [selectedZones, setSelectedZones] = useState(calculatedZoneArray);
  const [allActiveZones, setAllActiveZones] = useState([]);
  const [isRoleModal, setRoleModal] = useState(false);
  const [isStatusModal, setStatusChangeModal] = useState(false);
  const [isZoneModal, setZoneChangeModal] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isBasicModal, setBasicModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [bodyModal, setBodyModal] = useState('');
  const [bookingsAvailable, setBookingsAvailable] = useState(
    worker.bookings.upcoming
  );
  const [role, setRole] = useState(worker.ambassador ? 'Ambassador' : 'Fixare');

  useEffect(() => {
    zoneRequest()
      .then((res) => {
        const zoneList = getUniqZones(res.data, 'alias');

        setAllActiveZones(zoneList);
      })
      .catch((err) => {
        Alert.alert('Unable to get zones', err);
      });
  }, []);

  const update = () => {
    const splitName = name.split(' ');

    const data = {
      id: worker.id,
      firstName: splitName[0],
      lastName: splitName[1],
      address: address,
      telephone: telephone,
      status: status === 'Aktiv' ? true : false,
      ambassador: role === 'Ambassador' ? true : false,
      zones: selectedZones,
    };

    updateWorkerDetails(data)
      .then(() => {
        setTitleModal('Success!');
        setBodyModal('Worker data updated successfully');
        setBasicModal(true);
      })
      .catch(() => {
        setTitleModal('Error!');
        setBodyModal('Unable to update worker details');
        setBasicModal(true);
      });
  };

  const remove = () => {
    setDeleteModal(false);
    deleteWorker(worker.id)
      .then(() => {
        Alert.alert('Success!', 'worker deleted successfully');
        navigation.navigate(MANAGE_WORKERS_SCREEN);
      })
      .catch(() => Alert.alert('Error!', 'Unable to delete worker'));
  };
  function closeRoleModal(params) {
    setRoleModal(false);
  }

  function closeStatusModal(params) {
    setStatusChangeModal(false);
  }

  function closeZoneModal(params) {
    setZoneChangeModal(false);
  }
  function closeDeleteModal(params) {
    setDeleteModal(false);
  }
  function closeBasicModal(params) {
    setBasicModal(false);
  }
  const applyFortnox = () => {
    let data = {
      "worker_id" : worker.id
    };
    updateWorkerFortnox(data);
    // .then((res) => {
    //  console.log(res.data)
    // })
    // .catch((err) => {
    //   Alert.alert('Unable to update fortnox', err);
    // });

  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>Worker</Text>
        <Text style={styles.value}>ID: {worker.id}</Text>
      </View>

      <UserRole role={role} setRole={setRole} setRoleModal={setRoleModal} />

      <View style={styles.inputContainer}>
        <Text style={styles.bold}>Fixer</Text>
        <Text style={styles.inputHeading}>{name}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.bold}>Address</Text>
        <Text style={styles.inputHeading}>{address}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.bold}>Telephone</Text>
        <Text style={styles.inputHeading}>{telephone}</Text>
      </View>

      <Status
        status={status}
        setStatus={setStatus}
        hasBookings={bookingsAvailable}
        setStatusChangeModal={setStatusChangeModal}
      />
      <Zone
        selectedZones={selectedZones}
        setSelectedZones={setSelectedZones}
        allActiveZones={allActiveZones}
      />

      <Fortnox 
      applyFortnox = {applyFortnox}
       />

      <View style={styles.buttonContainer}>
        <Button text="Save changes" color={PEACH} onPress={update} />
        <Button
          text="Delete worker"
          onPress={() =>
            bookingsAvailable != 0 && status != 'Inaktiv'
              ? setStatusChangeModal(true)
              : setDeleteModal(true)
          }
        />
      </View>
      <RoleModal visible={isRoleModal} closeModal={closeRoleModal} />
      <StatusChangeModal
        visible={isStatusModal}
        closeModal={closeStatusModal}
      />
      {/* <ZoneChangeModal visible={isZoneModal} closeModal={closeZoneModal} /> */}

      <DeleteModal
        visible={isDeleteModal}
        closeModal={closeDeleteModal}
        acceptDelete={remove}
      />
      <MessageModal
        visible={isBasicModal}
        closeModal={closeBasicModal}
        title={titleModal}
        body={bodyModal}
      />
    </ScrollView>
  );
};
