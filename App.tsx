/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import TopNavigationBar from './src/components/StudyTab/TopNavigation';
import {generateRandomEventList} from './src/components/StudyTab/TopNavigation/helpers/helpers';
import {TEventItem} from './src/components/StudyTab/TopNavigation/types/event';
import TileViewContainer from './src/components/StudyTab/TileViewContainer';

function App(): React.JSX.Element {
  const events = generateRandomEventList(5);

  const [selectedEventList, setSelectedEventList] = useState<TEventItem>(
    events.items[0],
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar
        onCalendar={() => {}}
        onSearch={() => {}}
        onStar={() => {}}
      />
      {selectedEventList.isCalendarView ? null : (
        <TileViewContainer data={selectedEventList} />
      )}
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
