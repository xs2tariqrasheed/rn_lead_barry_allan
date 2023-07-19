import React, { useState, useEffect } from 'react';
import * as types from '../../constants/actions';
import { View, Text, ScrollView, TouchableOpacity, RefreshControl} from 'react-native';
import { CardFixer } from '../common';
import { CardFixerComponent } from '../index';
import { timeParsed } from '../../utils/time';
import { Icon } from 'react-native-elements';
import { styles } from './style';
import { FlatList } from 'react-native';
import { lightOrange } from '../../constants/colors'
import OurZones from '../Modals/ZonesModal';
import { useDispatch } from 'react-redux';
import { fixJobRequest } from '../../api/jobs.api';
import { Alert } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import moment from 'moment';
import { getAvailableJobs } from '../../actions/jobs.action';

var zone_arr = []
var roleMenu = null


export default ({
  jobs,  
  showFilter,
  isFilterVisible,
  onFilterPress,
  onShowAllPress,
  handleInfoModa,
  setServices,
  serviceList,
  zones,
  onZoneClick,
  selectedZones,
}) => {
  const dispatch = useDispatch();
  const [showZonesModal, setZonesModal] = useState(false);
  const [filterVal, setFilterVal] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [refreshing ,setRefreshing] = useState(false)

  const handleAssingJob = (data) => {
    dispatch(assignJob(data.id));
  };

  const assignJob = (id) => {
    return (dispatch) => {
      fixJobRequest(id)
        .then((res) => {
          dispatch(updateAvailableJobs(res.data));

          setTimeout(() => {
            handleInfoModa();
          }, 1500);
        })
        .catch((err) => {
          Alert.alert("Unable to assign job", err);
        });
    };
  };

  const updateAvailableJobs = (payload) => ({
    type: types.UPDATE_AVAILABLE_JOBS,
    payload: payload,
  });
  const onRefresh=()=>{
    setRefreshing(true)
    dispatch(getAvailableJobs());
    setRefreshing(false)
 
   }
  const closeZoneModal = () => {
    setZonesModal(false);
  };

  const setRoleMenuRef = (ref) => {
    roleMenu = ref;
  };
  const renderItem = ({ item, index }) => {
    return (
      <View style={item.selected ? [styles.filterSelected] : [styles.filters]}>
        <TouchableOpacity onPress={() => {
          onFilterPress(item, index)
          setFilterVal(item.title)
          setShowAll(false)
        }}>
          <Text style={styles.filterText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
   jobs = jobs.sort((a, b) => new Date(...a.appointment_at.split('/').reverse()) - new Date(...b.appointment_at.split('/').reverse()));
  return (
    <ScrollView refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeHeading}>Welcome!</Text>
        <Text
          style={styles.welcomeText}
        >{`Below you see the listed jobs that you can choose from within your zone. If the date, time and task works for you, claim the job and start to fix!`}</Text>

      </View>
      <View style={styles.headingView}>
      <View style={{width:"30%"}}>
      <Text style={styles.heading}>Available jobs</Text>

      </View>
        <View style={styles.zoneView}>
        <View style={{width:"20%"}}>
        <Text
            style={styles.zoneheading}
          >
            Zone:
          </Text>
        </View>
        <View style={{width:"60%"}}>
        <Text style={[styles.zoneheading, { marginRight: 10 }]}>{' '}{zones.length > 0 && zones.map((z) => z.split('Zon ')[1]).join(', ')}</Text>

        </View>
        <View style={{width:"20%"}}>

          <Icon
            onPress={showFilter}
            name="filter"
            type="font-awesome-5"
            color={isFilterVisible ? lightOrange : "#000"}
            size={20}
            marginLeft={10}
          />
          </View>
        </View>
      </View>


      <Menu ref={setRoleMenuRef} style={styles.menu}>
        <ScrollView>
          {zones?.map((item, i) => {
            return (
              <View key={i}>
                <MenuItem
                  onPress={() => onZoneClick(item)}
                >
                  
                  <View style={styles.itemContainer}>
                    <Text
                      style={item?.selected ? [styles.menuItemSelected] : [styles.menuItem]}
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



      {isFilterVisible ? (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginHorizontal: "5%",
            marginTop: 15,
          }}
        >
         <View style={showAll ? [styles.filterSelected] : [styles.filters]}>
        <TouchableOpacity onPress={() => {
          onShowAllPress();
          setFilterVal('')
          setShowAll(true)
        }}>
          <Text style={styles.filterText}>Show All</Text>
        </TouchableOpacity>
      </View>
          <FlatList
            data={serviceList}
            numColumns={3}
            renderItem={renderItem}
          />
        </ScrollView>
      ) : null}

      <View>
        {jobs &&
          jobs.map((item) => {
            const { month, date, time } = timeParsed(item.appointment_at);
            const time_appointment = moment.utc(new Date(item.appointment_at)).local().format('HH:mm');
            if (filterVal) {
              if (filterVal == item.service.title) {
                return (
                  <CardFixer
                    key={item.id}
                    iconName={item.service.icon}
                    text={item.service.title}
                    color={item.service.color}
                    lowerText={
                      <Text>
                        {month}-{date} {time_appointment}
                      </Text>
                      
                    }
       
                    expanded={
                      <CardFixerComponent
                        data={item}
                        assign_Job={() => handleAssingJob(item)}
                      />
                    }
                  />
                );
              }
            } else {
              return (
                <CardFixer
                  key={item.id}
                  iconName={item.service.icon}
                  text={item.service.title}
                  color={item.service.color}
                   
                  lowerText={
                    <Text>
                      {month}-{date} {time_appointment}
                    </Text>
                  }
                  expanded={
                    <CardFixerComponent
                      data={item}
                      assign_Job={() => handleAssingJob(item)}
                      
                    />
                  }
                />
              );
            }

          })}
      </View>
    </ScrollView>
  )
};