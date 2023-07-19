import React, { useEffect, useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { activateZones, dashboardDataRequest, fetchAllZones } from '../../api/admin.api';
import { Overlay, AdminData } from '../../components';
import { Header, CardAdmin } from '../../components/common';
import { PINK, PEACH, BROWN, appColor, black, headerColor, lightOrange } from '../../constants/colors';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import {
  MANAGE_JOBS_SCREEN,
  MANAGE_WORKERS_SCREEN,
} from '../../constants/screens';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { useDispatch, useSelector } from 'react-redux';
import { getUniqZones } from '../../helpers/zonesHelper';
import _ from 'lodash';

// let menu_list = [
//   { id: 1, selected: false },
//   { id: 2, selected: false },
//   { id: 3, selected: false },
//   { id: 4, selected: false },
//   { id: 5, selected: false },
//   { id: 6, selected: false },
// ]
var zone_arr = []


export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  // const [menuList, setMenuList] = useState(menu_list)

  const [zones, setZones] = useState([]);
  const [activeZones, setActiveZones] = useState([]);

  var roleMenu = null

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const leftIcon = (
    <Icon
      name={visible ? 'times' : 'bars'}
      type="font-awesome-5"
      color="#141414"
      size={22}
    />
  );
  const headerText = <Text style={styles.headerText}>Dashboard</Text>;

  useEffect(() => {
    // setZones(zonesList)    /// state update
    // dispatch(getZones())

    fetchAllZones() // Aziz: This will get all the zones whether they are active or not
      .then((res) => {
        const zoneList = getUniqZones(res.data);
        const activeOnes = res.data.filter((z) => z.is_active);
        const activeList = getUniqZones(activeOnes);
        setZones(zoneList);
        setActiveZones(activeList);
      })
      .catch((err) => {
        Alert.alert('Kunde inte hitta alla zoner', err);
      });

    dashboardDataRequest()
      .then((res) => setData(res.data))
      .catch(() => Alert.alert('Error!', 'Unable to get data'));
  }, []);

  // const get_skv = () => {
  //   bookingsSkvData()
  //   .then((res) => console.log(res))
  //   .catch(() => Alert.alert('Error!', 'Unable to get data'));
  // }

  const setRoleMenuRef = (ref) => {
    roleMenu = ref;
  };

  let selectedZoneHash = {};
  activeZones.map((z) => (selectedZoneHash[z] = true));

  const pickZone = (clickedZone) => {
    const zoneSet = new Set(activeZones);

    if (selectedZoneHash[clickedZone]) {
      zoneSet.delete(clickedZone);
    } else {
      zoneSet.add(clickedZone);
    }

    const zoneArray = Array.from(zoneSet);
    setActiveZones(zoneArray);

    activateZones(zoneArray)
      .then((_res) => console.log("Zones activated"))
      .catch((_err) => console.log("Zones were not updated", _err))
  };

  const ActiveZone = () => (
    <View>
      <View style={styles.textContainer}>
      <View style={{width:"70%"}}>
  <Text style={styles.leftText}>
          <Text style={styles.boldText}>Aktiva zoner :</Text>{' '} {activeZones.map((z) => z.split('Zon ')[1]).join(', ')}
        </Text>
      </View>

      <View style={{width:"30%"}}>
      <TouchableOpacity
          onPress={() => roleMenu.show()}
        >
          <Text style={styles.rightText}>Ändra</Text>
        </TouchableOpacity>
      </View>
      


       

      </View>
      <Menu ref={setRoleMenuRef} style={styles.menu}>
        <ScrollView style={{ maxHeight: 200 }}>
          {zones?.map((item, i) => {
            return (
              <View>
                <MenuItem onPress={() => pickZone(item)}>
                  <View style={styles.itemContainer}>
                    <Text
                      style={
                        selectedZoneHash[item]
                          ? [styles.menuItemSelected]
                          : [styles.menuItem]
                      }
                    >
                      {item}
                    </Text>
                  </View>
                </MenuItem>
                <MenuDivider />
              </View>

            )
          })
          }
        </ScrollView>
      </Menu>
    </View>
  );


  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={headerColor}
        leftPress={toggleOverlay}
      />
      <ScrollView>

        <View style={styles.colorContainer}>
          <View style={styles.textBlock}>
            <Text style={styles.value}>{data.today_jobs}</Text>
            <Text style={styles.labels}>Beställningar idag</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.value}>{data.customers}</Text>
            <Text style={styles.labels}>Registrerade kunder</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <CardAdmin
            text="Manage jobs"
            color="#EF8C89"
            iconName="clipboard-list"
            onPress={() => navigation.navigate(MANAGE_JOBS_SCREEN)}
          />
          <CardAdmin
            text="Manage workers"
            color="#FEA88D"
            iconName="user-friends"
            onPress={() => navigation.navigate(MANAGE_WORKERS_SCREEN)}
          />
        </View>
        <View style={styles.fileDownLoadView}>
          <Text style={styles.downloadText}>Löneunderlag</Text>
          <TouchableOpacity onPress={() => Linking.openURL("https://api.ifixservice.org/api/v1/user_salaries")} >
          <Icon
            name={'download'}
            type="font-awesome-5"
            color={lightOrange}
            size={16}
          />
          </TouchableOpacity>
          
        </View>

        <View style={styles.fileDownLoadView}>
          <Text style={styles.downloadText}>Underlag för SKV</Text>
          <TouchableOpacity onPress={() => Linking.openURL("https://api.ifixservice.org/api/v1/admin/bookings/skvdata")}>
          <Icon
            name={'download'}
            type="font-awesome-5"
            color={lightOrange}
            size={16}
          />
          </TouchableOpacity>
         
        </View>
        <TouchableOpacity style={styles.fileDownLoadView} onPress={() => Linking.openURL("https://apps.fortnox.se/oauth-v1/auth?client_id=8OSm9GtGrqrx&redirect_uri=https://api.ifixservice.org/api/v1/read_fortnox_code&scope=salary&state=1&access_type=offline&response_type=code")}>
          <Text style={styles.downloadText}>Logga in på Fortnox</Text>
          
         
        </TouchableOpacity>
        
        <ActiveZone />
        <AdminData data={data} />
      </ScrollView>
      <Overlay visible={visible} toggle={toggleOverlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor,
  },
  headerText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#141414',
  },
  cardContainer: {
    // marginTop: 15,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
    marginTop: 17,
  },
  leftText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#3C3C3C',
  },
  boldText: {
    fontFamily: RUBIK_MEDIUM,
  },
  rightText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: BROWN,
    textAlign:"right"
  },

  colorContainer: {
    backgroundColor: headerColor,
    // marginVertical: '5%',
    marginBottom: '2%',
    paddingVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textBlock: {
    alignItems: 'center',
  },
  labels: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 13,
    color: lightOrange,
    marginTop: 10,
  },
  value: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 45,
    color: lightOrange,
  },
  fileDownLoadView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
    marginTop: 15,
  },
  downloadText: {
    color: black,
    fontSize: 14,
    fontFamily: RUBIK_MEDIUM,
  },
  menu: {
    width: '85%',
    marginHorizontal: '5%',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#3C3C3C',
    marginLeft: 20
  },
  menuItemSelected: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: lightOrange,
    marginLeft: 20
  }


});
