import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface ITopNavigationProps {
  onSearch: any;
  onStar: any;
  onCalendar: any;
}

const TopNavigationBar = ({
  onSearch,
  onStar,
  onCalendar,
}: ITopNavigationProps) => {
  const [selectedNav, setSelectedNavigation] = useState<string>('schedule');

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={onSearch} style={styles.iconButton}>
          <Icon name="rocket" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSearch} style={styles.iconButton}>
          <Icon name="refresh" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.segmentedControl}>
        <TouchableOpacity
          onPress={() => setSelectedNavigation('schedule')}
          style={
            selectedNav === 'schedule'
              ? styles.segmentButton
              : styles.segmentSelected
          }>
          <Text
            style={
              selectedNav === 'schedule'
                ? styles.segmentTextSelected
                : styles.segmentText
            }>
            Schedule
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedNavigation('readinglist')}
          style={
            selectedNav === 'readinglist'
              ? styles.segmentButton
              : styles.segmentSelected
          }>
          <Text
            style={
              selectedNav === 'readinglist'
                ? styles.segmentTextSelected
                : styles.segmentText
            }>
            Reading List
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={onStar} style={styles.iconButton}>
          <Icon name="star" size={30} color="#fff" />
          {/* <Image source={require('./icons/star-icon.png')} style={styles.icon} /> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={onCalendar} style={styles.iconButton}>
          <Icon name="calendar" size={30} color="#fff" />
          {/* <Image
            source={require('./icons/calendar-icon.png')}
            style={styles.icon}
            /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNavigationBar;
