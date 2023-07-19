import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckBox, Icon } from 'react-native-elements';
import { Button } from '../common';
import { styles } from './style';
import { PINK, PEACH, SOFT_RED ,lightOrange } from '../../constants/colors';
import { FIXER_PHOTO_SCREEN } from '../../constants/screens';
import JobCompleted from '../../components/Modals/JobCompleteModal'
import { useDispatch } from 'react-redux';
import { setBlur } from '../../actions/blur.action';


export default ({ jobId , hasStarted }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
     navigation.setOptions({tabBar: { display: false }});
     return () => navigation.setOptions({ tabBar: { display: false }});
   } );

  const [fixedModal, setFixedItModal] = useState(false);
  const [clearedCheck, setClearedCheck] = useState(false);
  const [packedCheck, setPackedCheck] = useState(false);
  const [timer, setTimer] = useState(false);
  const [started, setStarted] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const buttonIcon = (
    <Icon
      name={started ? 'pause' : 'play'}
      type="font-awesome-5"
      color={PEACH}
      size={20}
    />
  );

  const timeToString = (time) => {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, '0');
    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');

    setHours(formattedHH);
    setMinutes(formattedMM);
    setSeconds(formattedSS);
  };

  let startTime;

  const start = () => {
    startTime = Date.now() - elapsedTime;

    setTimerInterval(
      setInterval(() => {
        setElapsedTime(Date.now() - startTime);
        timeToString(Date.now() - startTime);
      }, 1000)
    );
    setStarted(true);
  };

  const pause = () => {
    clearInterval(timerInterval);
    setStarted(false);
  };

  function close_Fixed_Modal() {
    setFixedItModal(false)
    dispatch(setBlur(false))
  }
  function handleCleandUpWork() {
    setClearedCheck(!clearedCheck)
  }

  function handleToolPacked() {
    setPackedCheck(!packedCheck)
  }

  function handleJobCompleted() {
if(clearedCheck && packedCheck){
    navigation.navigate(FIXER_PHOTO_SCREEN, {
      jobId: jobId,
      time: `${hours}:${minutes}:${seconds}`,
    });
    dispatch(setBlur(false))
    close_Fixed_Modal()
  }
}

// navigation.setOptions({ tabBarStyle: { display: "none" }})

  return (
    <View style={{ backgroundColor: "#FFF7F4", flex: 1 }}>
      {timer ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>The timer has started.</Text>
          <Text style={[styles.text, styles.pinkText]}>Let's begin!</Text>
        </View>
      ) : (
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Start the timer when you are{' '}
              <Text style={styles.pinkText}>ready to begin!</Text>
            </Text>
          </View>
        )}

      <View style={styles.timerContainer}>
        <Text style={styles.timer}>
          {hours !== '00' && `${hours}:`}
          {minutes}:{seconds}
        </Text>
      </View>

      {timer ? (
        <View style={styles.buttonContainer}>
          <Button
            text="I fixed it!"
            color={lightOrange}
            onPress={() => {
              
              pause();
              setFixedItModal(true);
              dispatch(setBlur(true))
            }}
          />
        </View>
      ) : (
          <View style={styles.buttonContainer}>
            <Button
              text="Start timer!"
              color={lightOrange}
              onPress={() => {
                setTimer(true);
                hasStarted()
                start();
              }}
            />
          </View>
        )}

      <JobCompleted
        visible={fixedModal}
        closeModal={close_Fixed_Modal}
        handleCleandUpWork={handleCleandUpWork}
        cleanedUp={clearedCheck}
        handleToolPacked={handleToolPacked}
        toolPacked={packedCheck}
        job_Completed={handleJobCompleted}
      />
    </View>


  );
};
