import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getAvailableJobs } from '../../actions/jobs.action';
import { servicesRequest, zoneRequest, zoneRequestFixer} from '../../api/services.api';
import { AvailableJobs, Overlay } from '../../components';
import { appColor, headerColor, lightOrange } from '../../constants/colors';
import { PINK, PEACH } from '../../constants/colors';
import JobDetail from '../../components/Modals/JobDetailModal'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FIXER_PROFILE_SCREEN, PROFILE_STACK } from '../../constants/screens'
import { Blur, Header } from '../../components/common';
import { setBlur } from '../../actions/blur.action';
import { getUniqZones } from '../../helpers/zonesHelper';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isInfoVisible, setInfoModalVisible] = useState(false)
  const jobs = useSelector((state) => state.availableJobs);
  const [services, setServices] = useState([])
  const [zones, setZones] = useState([])
  const [selectedZones, setSelectedZones] = useState([]); 

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const showFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const handleInfoModa = () => {
    setInfoModalVisible(true)
    dispatch(setBlur(true));

  }

  const onFilterPress = (item, index) => {
    const temp = services.slice()
    temp.map((s, i) => {
      if (item.title === s.title && index === i) {
        temp[i].selected = true
      } else {
        temp[i].selected = false
      }
    })
    setServices(temp)
  }
  const onShowAllPress = () => {
    const temp = services.slice()
    temp.map((s, i) => {
      temp[i].selected = false
    })
    setServices(temp)
  }



  const closeInfoModal = () => {
    setInfoModalVisible(false)
    dispatch(setBlur(false));

  }

  const leftIcon = (
    <Icon
      name={visible ? 'times' : 'bars'}
      type="font-awesome-5"
      color="#141414"
      size={22}
    />
  );
  const headerText = (
    <Image style={styles.headerLogo} source={require('../../assets/images/logga_ifix-logo.png')} />
  );

  useEffect(() => {
    dispatch(setBlur(false));

    servicesRequest().then((res) => {
      let service = []
      res.data?.map((s, i) => {
        service.push({ ...s, selected: false })
      })
      setServices(service)
    }).catch((err) => {
      console.log('err while getting  service',)
    })


    zoneRequestFixer()
      .then((res) => {
        const zoneList = getUniqZones(res.data);
        setZones(zoneList);
      })
      .catch((err) => {
        console.log('Unable to get zones', err);
      });

  }, []);

  useEffect(() => {
    dispatch(getAvailableJobs(selectedZones));
  }, [dispatch, selectedZones]);

  function showJobDetail(params) {
    setInfoModalVisible(false)
    dispatch(setBlur(false));
    navigation.navigate(PROFILE_STACK)
  }

  let selectedZoneHash = {};
  selectedZones.map((z) => (selectedZoneHash[z] = true));

  const onZoneClick = (clickedZone) => {
    // let _zones = _zonesList.slice()

    // _zones.map((i, n) => {
    //   if (i.selected && n === val) {
    //     _zones[n].selected = false

    //     var filteredAry = zone_arr.filter(function (e) { return e !== n + 1 })
    //     zone_arr = filteredAry

    //   } else if (!i.selected && n === val) {
    //     _zones[n].selected = true
    //     zone_arr.push(n + 1)
    //   }

    // })

    // setZones(_zones)
    // setActiveZones(zone_arr)

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
    <View style={styles.container}>
     
      
      <Header
        iconLeft={leftIcon}
        text={headerText}
        leftPress={toggleOverlay}
        color={headerColor}
        
      />
      
     
        <AvailableJobs
          jobs={jobs}
          showFilter={showFilter}
          isFilterVisible={isFilterVisible}
          onFilterPress={onFilterPress}
          onShowAllPress={onShowAllPress}
          handleInfoModa={handleInfoModa}
          serviceList={services}
          setServices={setServices}
          zones={zones}
          onZoneClick={onZoneClick}
          selectedZones={selectedZones}
          
        />
        
        <Overlay visible={visible} toggle={toggleOverlay} />
      
      <JobDetail
        visible={isInfoVisible}
        handleSaveChanges={closeInfoModal}
        showJobDetail={showJobDetail}
      />
      <Blur />
      
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:appColor
    backgroundColor: '#FFF7F4',
  },
  headerText: {
    color: lightOrange,
    fontWeight: '600',
    fontSize: 26,

  },
  headerLogo: {
    width: 60,
    height: 18,
    resizeMode: "contain"
  }
});
