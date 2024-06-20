/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TopNavigationBar from './src/components/StudyTab/TopNavigation';
import {generateRandomEventList} from './src/components/StudyTab/TopNavigation/helpers/helpers';
import {TEventItem} from './src/components/StudyTab/TopNavigation/types/event';
import DayViewContainer from './src/components/StudyTab/DayViewContainer';
import CalendarSchedule from './src/components/StudyTab/CalendarViewContainer';
import TileViewContainer from './src/components/StudyTab/TileViewContainer';
import ReadingList from './src/components/ReadingList';
import PeoplePageScreen from './src/components/People';

function App(): React.JSX.Element {
  const events = generateRandomEventList(5);

  const [selectedEventList, setSelectedEventList] = useState<TEventItem>(
    events.items[0],
  );

  return (
    <SafeAreaView style={styles.container}>
      <PeoplePageScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    // ensure the background color fills the screen
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
