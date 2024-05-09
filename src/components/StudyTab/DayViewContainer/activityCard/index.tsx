import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CircleAvatar from '../../../Avatar';
import {faker} from '@faker-js/faker';

const ActivityCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>12:30</Text>
      <View style={styles.separator} />
      <Text style={styles.description}>LUNCH @ {faker.location.street()}</Text>
      <CircleAvatar size={50} borderColor={'green'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    width: 500,
  },
  time: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#000',
    marginRight: 10,
  },
  description: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default ActivityCard;
