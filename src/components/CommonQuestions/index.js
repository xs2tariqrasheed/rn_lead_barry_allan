import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './style';
import { BLACK } from '../../constants/colors';

export default () => {
  const dummyData = [
    { title: 'Hänga upp hyllor', icon: 'th-large', color: '#FE8F8F' },
    { title: 'Kratta löv', icon: 'leaf', color: '#D7ADFE' },
  ];

  return (
    <View style={styles.lowerContainer}>
      <Text style={styles.heading}>Vanliga frågor</Text>

      {dummyData.map((item, index) => {
        return (
          <View key={index}>
            <View style={styles.lowerHeadingContainer}>
              <Icon
                name={item.icon}
                type="font-awesome-5"
                color={item.color}
                size={20}
                solid
              />
              <Text style={styles.lowerHeading}>{item.title}</Text>
            </View>
            {[1, 2].map((i) => {
              return (
                <View key={i} style={styles.linesContainer}>
                  <View style={styles.inlineText}>
                    <Text style={styles.lowerLine1}>
                      Vart ska jag ställa bilen? Vart ska jag ställa bilen?
                    </Text>
                    <TouchableOpacity>
                      <Icon
                        name="chevron-down"
                        type="font-awesome-5"
                        size={15}
                        color={BLACK}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
