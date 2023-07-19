import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import FormData from 'form-data';
import { jobCompletionRequest } from '../../api/jobs.api';
import { Button } from '../common';
import { styles } from './style';
import { PINK, PEACH ,dimOrgange, lightGrey, lightOrange } from '../../constants/colors';
import { FIXER_PROFILE_SCREEN } from '../../constants/screens';
import MessageModal from '../Modals/MessageModal';

export default ({ jobId, time }) => {
  const navigation = useNavigation();
  const [images, setImages] = useState([]);
  const [isBasicModal, setBasicModal] = useState(false);

  const buttonIcon = (
    <Icon name="camera" type="font-awesome-5" color="#FFF" size={25} />
  );

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const PickImage = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      setImages(images.concat(res));
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log(error);
      } else {
        console.log(error);
        throw error;
      }
    }
  };

  const jobComplete = () => {
    let formData = new FormData();

    formData.append('booking[time_taken]', time);
    formData.append('booking[status]', 'done');

    for (const image of images) {
      formData.append('booking[images][]', {
        uri: image.uri,
        name: image.name,
        type: image.type,
      });
    }

    jobCompletionRequest(jobId, formData)
      .then((res) => {
        // Alert.alert('Success!', 'job completed successfully');
        setBasicModal(true)
        
      })
      .catch(() => {
        Alert.alert('Error!', 'unable to complete job');
      });
  };
  function closeBasicModal(params) {
    setBasicModal(false);
    navigation.navigate(FIXER_PROFILE_SCREEN);

  }

  return (
    <View style={{flex:1}}>
      <Text style={styles.text}>Great job!</Text>
      <Text style={styles.text}>
        Please document your work by{' '} 
        <Text style={styles.headerText}>adding some photos.</Text>
      </Text>

      {images?.length>0 ? null :
      <View style={styles.imgView}>
        <Icon
         name="images"
         type="font-awesome-5"
         color="#FFF"
         size={50}
        />
      </View>
      }
      
      {images && (
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.imageContainer}
          >
            {images.map((image, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    images.splice(index, 1);
                    setImages(images);
                    forceUpdate();
                  }}
                  style={styles.icon}
                >
                  <Icon
                    name="times"
                    type="font-awesome-5"
                    color="#FFF"
                    size={30}
                  />
                </TouchableOpacity>
             
                <Image source={{ uri: image.uri }} style={styles.image} />
              </View>
            ))}
          </ScrollView>
        </View>
      )}
      
      <View style={styles.buttonContainer}>
        <Button
          text="Add photos"
          color={lightOrange}
          // icon={buttonIcon}
          onPress={PickImage}
        />
        <Button 
          text="Job complete" 
          onPress={jobComplete} 
          disabled={images.length === 0}
          />
      </View>
      <MessageModal
        visible={isBasicModal}
        closeModal={closeBasicModal}
        title={"Success"}
        body={"Job completed successfully"}
      />
    </View>
  );
};
