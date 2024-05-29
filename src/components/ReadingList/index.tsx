import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import DownloadButton from './DownloadButton';

const ReadingList = () => {
  const data = [
    {
      id: '1',
      title: 'UNDERSTANDING POWER AND POLITICS',
      time: '09:00 - 12:30',
      lecturer: 'José Luis Alvarez',
      requiredReadings: 1,
      completedReadings: 0,
    },
    {
      id: '2',
      title: 'COACHING APPROACHES WORKING WITH GROUPS I',
      time: '13:30 - 17:15',
      lecturer:
        'Derek Deasy, Jasenka Lukac-Greenwood, Amer Madi, Sarah Miller, Michael Sanson, Michael Scott, Mette Stuhr',
      requiredReadings: 1,
      completedReadings: 0,
    },
    {
      id: '3',
      title: 'COACHING APPROACHES WORKING WITH GROUPS II',
      time: '08:30 - 12:30',
      lecturer:
        'Derek Deasy, Jasenka Lukac-Greenwood, Amer Madi, Sarah Miller, Michael Sanson, Michael Scott, Mette Stuhr',
      requiredReadings: 1,
      completedReadings: 0,
    },
    // Add more data here
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              position: 'absolute',
              left: 0,
              fontSize: 16,
            }}>
            GMT+02
          </Text>
          <Text style={styles.headerText}>17 Jun - 20 Jun</Text>
        </View>
        <Text style={styles.subHeaderText}>
          Required readings should be prepared prior to the start of class
        </Text>
        <MyReadings />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const MyReadings = () => (
  <View style={styles.myReadingContainer}>
    <View>
      <Text style={styles.myReadingText}>My Readings</Text>
      <Text style={{color: '#eb5b34', fontSize: 18, paddingVertical: 5}}>
        Required: 0 / 10
      </Text>
      <Text style={{color: '#34baeb', fontSize: 18}}>Recommended: 0/ 7</Text>
    </View>
    <View>
      <DownloadButton />
    </View>
  </View>
);

const renderItem = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.details}>
      {item.time} | {item.lecturer}
    </Text>
    <View style={styles.readingStatus}>
      <Text>
        Required: {item.completedReadings} / {item.requiredReadings}
      </Text>
    </View>
  </View>
);

export default ReadingList;
