import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import Menu, { MenuItem } from 'react-native-material-menu';
import _, { floor } from 'lodash';
import { timeParsed } from '../../utils/time';
import MessageModal from '../../components/Modals/MessageModal';
import {
  deleteJob,
  getWorkersRequest,
  updateJobDetails,
} from '../../api/admin.api';
import moment from 'moment';
import { Button } from '../common';
import { styles } from './style';
import { PINK, PEACH } from '../../constants/colors';
import { MANAGE_JOBS_SCREEN } from '../../constants/screens';
import BrookeDinja from '../Modals/BrookeDinja';

const Status = ({ jobStatus, setJobStatus }) => {
  let statusMenu = null;

  const setStatusMenuRef = (ref) => {
    statusMenu = ref;
  };

  const setStatus = (selected) => {
    setJobStatus(selected);
    statusMenu.hide();
  };

  return (
    <View>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>
          <Text style={styles.bold}>Status:</Text> {jobStatus}
        </Text>
        <TouchableOpacity onPress={() => statusMenu.show()}>
          <Text style={styles.change}>Ändra</Text>
        </TouchableOpacity>
      </View>

      <Menu ref={setStatusMenuRef} style={styles.menu}>
        <MenuItem onPress={() => setStatus('Ej klar')}>
          <Text
            style={
              jobStatus === 'Ej klar'
                ? [styles.selectedMenu]
                : [styles.menuItem]
            }
          >
            Ej klar
          </Text>
        </MenuItem>
        <MenuItem onPress={() => setStatus('Klar')}>
          <Text
            style={
              jobStatus === 'Klar' ? [styles.selectedMenu] : [styles.menuItem]
            }
          >
            Klar
          </Text>
        </MenuItem>
        <MenuItem onPress={() => setStatus('Dispyt')}>
          <Text
            style={
              jobStatus === 'Dispyt' ? [styles.selectedMenu] : [styles.menuItem]
            }
          >
            Dispyt
          </Text>
        </MenuItem>
      </Menu>
    </View>
  );
};

const Service = ({ job, quantity, setQuantity }) => {
  const price =
    job.service.price_type === 'hourly'
      ? job.service.price == null
        ? '0'
        : job.service.price * quantity + ' kr'
      : `${job.service.prices[quantity - 1]} kr`;

  return (
    <>
      <View style={styles.jobContainer}>
        <View style={styles.jobHeadingContainer}>
          <Text style={styles.jobTitle}>
            {quantity} X {job.service.title}
          </Text>
        </View>
      </View>
    </>
  );
};

const Fixer = ({
  workers,
  jobFixers,
  setJobFixers,
  jobAmbassadors,
  setJobAmbassadors,
}) => {
  const [itemIndex, setIndex] = useState(null);
  const [isBrookeModal, setBrookeModal] = useState(false);
  const [selectedFixer, setSelectedFixerModal] = useState(null);

  let fixerMenu = null;
  let ambMenu = null;

  const setFixerMenuRef = (ref) => {
    fixerMenu = ref;
  };

  const setAmbMenuRef = (ref) => {
    ambMenu = ref;
  };
  let fixers = workers.filter(
    (fixer) => fixer.active === true && fixer.ambassador === false
  );

  let ambassadors = workers.filter(
    (amb) => amb.active === true && amb.ambassador === true
  );

  const setFixer = (item) => {
    let newJobFixers = _.cloneDeep(jobFixers);
    newJobFixers[itemIndex] = item;
    setJobFixers(newJobFixers);
    fixerMenu.hide();
  };

  const setAmbassador = (item) => {
    let newJobAmbassadors = _.cloneDeep(jobAmbassadors);
    newJobAmbassadors[itemIndex] = item;
    setJobAmbassadors(newJobAmbassadors);
    ambMenu.hide();
  };
  function closeBrookeModal(params) {
    setBrookeModal(false);
  }
  return (
    <>
      <Text style={styles.fixerHeading}>Fixer/s</Text>

      {jobFixers.length > 0 &&
        jobFixers.map((fix, index) => {
          const name = fix.first_name + ' ' + fix.last_name;

          return (
            <View key={index} style={styles.fixerContainer}>
              <View style={styles.inlineData}>
                <View style={styles.fixerName}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name="user-friends"
                      type="font-awesome-5"
                      color="#fff"
                      size={12}
                    />
                  </View>
                  <Text style={styles.name}>{name}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    // fixerMenu.show();
                    setIndex(index);
                    setSelectedFixerModal(fix);
                    setBrookeModal(true);
                  }}
                >
                  <Text style={styles.change}>Ändra</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

      <Menu ref={setFixerMenuRef} style={styles.workerMenu}>
        <ScrollView>
          {fixers &&
            fixers.map((item) => (
              <MenuItem key={item.id} onPress={() => setFixer(item)}>
                <Text style={styles.menuItem}>
                  {item.first_name} {item.last_name}
                </Text>
              </MenuItem>
            ))}
        </ScrollView>
      </Menu>

      {jobAmbassadors.length > 0 &&
        jobAmbassadors.map((amb, index) => {
          const name = amb.first_name + ' ' + amb.last_name;

          return (
            <View key={index} style={styles.fixerContainer}>
              <View style={styles.inlineData}>
                <View style={styles.fixerName}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name="user-friends"
                      type="font-awesome-5"
                      color="#FFF"
                      size={12}
                    />
                  </View>
                  <Text style={styles.name}>{name}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    // ambMenu.show();
                    setIndex(index);
                    setSelectedFixerModal(amb);
                    setBrookeModal(true);
                  }}
                >
                  <Text style={styles.change}>Ändra</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

      <Menu ref={setAmbMenuRef} style={styles.workerMenu}>
        <ScrollView>
          {ambassadors &&
            ambassadors.map((item) => (
              <MenuItem key={item.id} onPress={() => setAmbassador(item)}>
                <Text style={styles.menuItem}>
                  {item.first_name} {item.last_name}
                </Text>
              </MenuItem>
            ))}
        </ScrollView>
      </Menu>
      {selectedFixer ? (
        <BrookeDinja
          visible={isBrookeModal}
          fixerData={selectedFixer}
          closeModal={closeBrookeModal}
        />
        
      ) : null}
    </>
  );
};
const Time = ({ timeString, setTimeString }) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [time, setTime] = useState(new Date());

  const showPicker = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const onChange = (event, selected) => {
    if (event.type === 'set') {
      setShow(false);
      setTime(selected);
      setTimeString(JSON.stringify(selected).replace('"', ''));
    } else if (event.type === 'dismissed') {
      setShow(false);
    }
  };

  return (
    <View style={styles.timeBlock}>
      <View style={styles.leftBlock}>
        <Text style={styles.timeHeading}>Date</Text>
        <TouchableOpacity
          onPress={() => showPicker('date')}
          style={styles.timeContainer}
        >
          <Icon
            name="calendar"
            type="font-awesome-5"
            size={20}
            color="#000"
            solid
          />
          <Text style={styles.time}>
            {timeString.substr(8, 2)}/{timeString.substr(5, 2)}-
            {timeString.substr(0, 4)}
          </Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          value={time}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <View style={styles.rightBlock}>
        <Text style={styles.timeHeading}>Time</Text>
        <TouchableOpacity
          onPress={() => showPicker('time')}
          style={styles.timeContainer}
        >
          <Icon
            name="clock"
            type="font-awesome-5"
            size={20}
            color="#000"
            solid
          />
          <Text style={styles.time}>{timeString.substr(11, 5)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ({ job }) => {
  const navigation = useNavigation();
  const statusLabel = {
    pending: 'Ej Klar',
    paid: 'Klar',
    disputed: 'Dispyt',
  };
  const [timeString, setTimeString] = useState(String(job.appointment_at));
  const [name, setName] = useState(job.first_name + ' ' + job.last_name);
  const [address, setAddress] = useState(job.place);
  const [quantity, setQuantity] = useState(job.quantity);
  const [floors, setFloors] = useState(job.floors);
  const [klarna_id, setKlarnaId] = useState(job.klarna_order_id);
  const [jobStatus, setJobStatus] = useState(statusLabel[job.status]);
  const [rutStatus, setRutStatus] = useState(job.rut_status);
  const [workers, setWorkers] = useState([]);
  const [fixers, setFixers] = useState(job.fixers);
  const [ambassadors, setAmbassadors] = useState(job.ambassadors);
  const [isBasicModal, setBasicModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [bodyModal, setBodyModal] = useState('');
  const [removeTrigger, setRemoveTrigger] = useState(false);
  const date = moment
    .utc(new Date(job.appointment_at))
    .local()
    .format('MM-DD-YY');
  const time_appointment = moment.utc(new Date(job.appointment_at)).local().format('hh:mm');
  console.log(job)
  useEffect(() => {
    let response = [];
    getWorkersRequest()
      .then(
        (res) => {
          res?.data?.map((item, n) => {
            response.push({ ...item, selected: false });
          });
          setWorkers(response);
        }
        // setWorkers(res.data)
      )
      .catch(() => Alert.alert('Error!', 'Unable to get workers'));
  }, []);

  const remove = () => {
    deleteJob(job.id)
      .then(() => {
        setTitleModal('Success!');
        setBodyModal('Job deleted successfully');
        setBasicModal(true);
        setRemoveTrigger(true);
      })
      .catch(() => {
        setTitleModal('Error!');
        setBodyModal('Unable to delete job');
        setBasicModal(true);
      });
  };

  const update = () => {
    const splitName = name.split(' ');

    const status =
      jobStatus === 'Ej klar'
        ? 'pending'
        : jobStatus === 'Klar'
        ? 'paid'
        : jobStatus === 'Dispyt' && 'disputed';

    const data = {
      id: job.id,
      first_name: splitName[0],
      last_name: splitName[1],
      status: status,
      quantity: quantity,
      appointment_at: timeString,
      fixer_ids: fixers.map((fixer) => fixer.id),
      amb_ids: ambassadors.map((amb) => amb.id),
      place: address,
      rut_status: rutStatus,
    };

    updateJobDetails(data)
      .then(() => {
        setTitleModal('Success!');
        setBodyModal('Job details updated successfully');
        setBasicModal(true);
      })
      .catch(() => {
        setTitleModal('Error!');
        setBodyModal('Unable to update job details');
        setBasicModal(true);
      });
  };
  function closeBasicModal(params) {
    setBasicModal(false);
  }
  function closeBasicRemoveModal(params) {
    setBasicModal(false);
    navigation.navigate(MANAGE_JOBS_SCREEN);
  }

  let rutMenu = null;

  const setRutMenuRef = (ref) => {
    rutMenu = ref;
  };

  const setRut = (selected) => {
    setRutStatus(selected);
    rutMenu.hide();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.heading}>
        <Text style={styles.title}>{job.service.title}</Text>
        <Text style={styles.value}>ID: {job.id}</Text>
      </View>

      <Service job={job} quantity={quantity} setQuantity={setQuantity} />

      <View style={styles.heading}>
        <Text style={styles.subTitle}>Order Information</Text>
      </View>

      <Status jobStatus={jobStatus} setJobStatus={setJobStatus} />

      <View style={styles.statusContainer}>
        <Text style={styles.detailStatus}>
          <Text style={styles.boldText}>Datum:</Text> {moment.utc(new Date(job.appointment_at)).local('sv').format('lll')}
        </Text>
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.detailStatus}>
          <Text style={styles.boldText}>Tid:</Text> {time_appointment}
        </Text>
      </View>

      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Betalning</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.rightText}>
            {/* {job.service.prices.reduce((a, v) => (a = a + v), 0)} kr */}
            {job.service.prices[job.quantity-1]} kr
          </Text>
          <Text style={styles.rightSubText}>Betalat med Klarna</Text>
        </View>
      </View>

      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Nyttjat RUT</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.rightText}>Nej</Text>
        </View>
      </View>

      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Klarna Id</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.rightText}>{klarna_id ? klarna_id : "N/A"}</Text>
        </View>
      </View>

     

      <Fixer
        workers={workers}
        jobFixers={fixers}
        setJobFixers={setFixers}
        jobAmbassadors={ambassadors}
        setJobAmbassadors={setAmbassadors}
      />

      <View style={styles.heading}>
        <Text style={styles.boldText}>Kundinformation</Text>
      </View>

      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Namn</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.alignRight}>{name}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Personnummer</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.alignRight}>{job.customer.personal_identity_number}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Telefon</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.alignRight}>{job.customer.phone_no}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Email</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.alignRight}>{job.customer.email}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Adress</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.alignRight}>{address}</Text>
          <Text style={styles.alignRight}>{job.zip_code}</Text>
        </View>
      </View>

      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Zon</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.alignRight}>4</Text>
        </View>
      </View>

      <View style={styles.doneContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Jobbet utförs</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.alignRight}>{job.street_address}</Text>
          <Text style={styles.alignRight}>{job.port_code}</Text>
          {job.is_parent && <Text style={styles.alignRightSub}>*Förälder*</Text>}
          
        </View>
      </View>

      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Våning</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.alignRight}>{floors}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={{ width: '50%' }}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>Portkod</Text>
          </Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.alignRight}>{job.port_code}</Text>
        </View>
      </View>

      <View>
        <View style={styles.statusContainer}>
          <Text style={styles.detailStatus}>
            <Text style={styles.boldText}>RUT-ansökan:</Text> {rutStatus}
          </Text>
          <TouchableOpacity onPress={() => rutMenu.show()}>
            <Text style={styles.change}>Ändra</Text>
          </TouchableOpacity>
        </View>

        <Menu ref={setRutMenuRef} style={styles.menu}>
          <MenuItem onPress={() => setRut('Inte ansökt')}>
            <Text
              style={
                rutStatus === 'Inte ansökt'
                  ? [styles.selectedMenu]
                  : [styles.menuItem]
              }
            >
              Inte ansökt
            </Text>
          </MenuItem>
          <MenuItem onPress={() => setRut('Ansökt')}>
            <Text
              style={
                rutStatus === 'Ansökt'
                  ? [styles.selectedMenu]
                  : [styles.menuItem]
              }
            >
              Ansökt
            </Text>
          </MenuItem>
          <MenuItem onPress={() => setRut('Godkänt')}>
            <Text
              style={
                rutStatus === 'Godkänt'
                  ? [styles.selectedMenu]
                  : [styles.menuItem]
              }
            >
              Godkänt
            </Text>
          </MenuItem>
          <MenuItem onPress={() => setRut('Avslagen')}>
            <Text
              style={
                rutStatus === 'Avslagen'
                  ? [styles.selectedMenu]
                  : [styles.menuItem]
              }
            >
              Avslagen
            </Text>
          </MenuItem>
        </Menu>
      </View>

      <View style={styles.buttonContainer}>
        <Button text="Spara ändringar" color={PEACH} onPress={update} />
        <Button text="Radera jobb" onPress={remove} />
      </View>
      <MessageModal
        visible={isBasicModal}
        closeModal={removeTrigger ? closeBasicRemoveModal : closeBasicModal}
        title={titleModal}
        body={bodyModal}
      />
    </ScrollView>
  );
};
