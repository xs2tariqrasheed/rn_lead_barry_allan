import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export default ({ data }) => {
  const customStyle = styles({});

  const ListItem = ({ text, value, border }) => {
    const customStyle2 = styles({ border: border });
    return (
      <View style={customStyle2.listItem}>
        <Text style={customStyle2.key}>{text}</Text>
        <Text style={customStyle2.count}>{value}</Text>
      </View>
    );
  };

  return (
    <View style={customStyle.container}>
      <ListItem text="Beställningar senaste veckan" value={data.week_jobs} />
      <ListItem text="Beställningar senaste Månaden" value={data.month_jobs} />
      <ListItem text="Beställningar i dispyt" value={data.disputed_jobs} />
      <ListItem text="Antal fixers" value={data.fixers} />
      <ListItem text="Antal ambassadörer" value={data.ambassadors} border="hide" />
    </View>
  );
};
