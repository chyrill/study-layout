/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import PeoplePageScreen from './src/components/People';
import {faker} from '@faker-js/faker';
import SearchModal from './src/components/Search';
import StudyScreen from './src/screen/study';
import {
  generateDailyEvents,
  generateWeeklyEventsList,
  getClosestWeeklyEvent,
  IDailyEvent,
  IWeeklyEvent,
} from './src/helpers/event.generator';
import {Provider} from 'react-redux';
import store from './src/store/store';
import TodoWrapper from './src/screen/todo/wrapper';

function App(): React.JSX.Element {
  const screenToDisplay = 'people';

  const [searchModalVisible, setSearchModalVisible] = useState<boolean>(false);

  const [searchItems, setSearchItems] = useState<ISearchItem[]>([]);

  const [searchedItems, setSearchedItems] = useState<ISearchItem[]>([]);
  const [searchItemType, setSearchItemType] = useState<string>('all');
  const [searchText, setSearchText] = useState<string>('');
  const [weeklyEvents, setWeeklyEvents] = useState<IWeeklyEvent[]>([]);
  const [selectedWeeklyEvent, setSelectedWeeklyEvent] =
    useState<IWeeklyEvent | null>(null);

  const [dailyEvents, setDailyEvents] = useState<IDailyEvent[]>([]);
  const [selectedDailyEvent, setSelecetedDailyEvent] =
    useState<IDailyEvent | null>(null);

  const [studyTabSelected, setStudyTabSelected] = useState<string>('schedule');

  const translateY = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;

  const handleSearchClick = () => {
    setSearchModalVisible(!searchModalVisible);
  };

  useEffect(() => {
    const items = generateSearchItems(faker.number.int({min: 10, max: 20}));
    setSearchItems(generateSearchItems(faker.number.int({min: 10, max: 20})));
    setSearchedItems(items);

    const _weeklyEvents = generateWeeklyEventsList(3);
    setWeeklyEvents(_weeklyEvents);

    const currentWeekEvent = getClosestWeeklyEvent(_weeklyEvents);
    setSelectedWeeklyEvent(currentWeekEvent);

    const _dailyEvents = generateDailyEvents(_weeklyEvents);
    setDailyEvents(_dailyEvents);
  }, []);

  useEffect(() => {
    const filteredItems = searchItems.filter((item: ISearchItem) => {
      const itemText = `${item.title.toLowerCase()} ${item.subtitle.toLowerCase()}`;
      const searchTextLower = searchText.toLowerCase();

      return searchItemType === 'all'
        ? itemText.includes(searchTextLower)
        : item.type.toLowerCase() === searchItemType &&
            itemText.includes(searchTextLower);
    });

    setSearchedItems(filteredItems);
  }, [searchItemType, searchItems, searchText]);

  useEffect(() => {
    if (searchModalVisible) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(translateY, {
        toValue: Dimensions.get('window').height,
        useNativeDriver: true,
      }).start();
    }
  }, [searchModalVisible, translateY]);

  const handleChangeWeek = (courseId: string) => {
    setSelectedWeeklyEvent(
      weeklyEvents.find(event => event.courseId === courseId)!,
    );
  };

  const onHandleEventSelected = (id: string) => {
    const dailyEvent = dailyEvents.find(day =>
      day.events.map(e => e.id).includes(id),
    );
    setSelecetedDailyEvent(dailyEvent!);
    setStudyTabSelected('day');
  };

  const onHandleChangeDay = (id: string) => {
    const dailyEvent = dailyEvents.find(day => day.id === id);
    setSelecetedDailyEvent(dailyEvent!);
  };

  const DisplayScreen = () => {
    switch (screenToDisplay.toLowerCase()) {
      case 'people':
        return <PeoplePageScreen handleSearchClick={handleSearchClick} />;
      case 'todo':
        return <TodoWrapper />;
      default:
        return (
          <StudyScreen
            selectedWeeklyEvent={selectedWeeklyEvent!}
            handleChangeWeek={handleChangeWeek}
            onEventSelect={onHandleEventSelected}
            selectedDailyEvent={selectedDailyEvent}
            onHandleChangeDay={onHandleChangeDay}
            selectedTab={studyTabSelected}
            onChangeTab={(tab: string) => setStudyTabSelected(tab)}
          />
        );
    }
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <DisplayScreen />
        {/* <PeoplePageScreen handleSearchClick={handleSearchClick} /> */}
        <SearchModal
          visible={searchModalVisible}
          handleSearchClick={handleSearchClick}
          items={searchedItems}
          handleTypeSelectionProp={setSearchItemType}
          handleSearchTextChange={setSearchText}
        />
      </SafeAreaView>
    </Provider>
  );
}

// for search modal
export interface ISearchItem {
  title: string;
  type: string;
  subtitle: string;
  peopleDetails?: {
    type: string;
    avatar: string;
  };
  documentDetails?: {
    type: string;
    date: Date;
  };
  sessionDetails?: {
    date: Date;
  };
}

const searchTypes = [
  'annoucement',
  'tasks',
  'documents',
  'notes',
  'people',
  'session',
];

const generateSearchItems = (count: number): ISearchItem[] => {
  const searchItems: ISearchItem[] = [];
  for (let i = 0; i < count; i++) {
    const type =
      searchTypes[faker.number.int({min: 0, max: searchTypes.length - 1})];
    let peopleDetails, documentDetails, sessionDetails;

    if (type === 'people') {
      peopleDetails = {
        type: faker.person.jobType(),
        avatar: faker.image.avatar(),
      };
    } else if (type === 'document') {
      documentDetails = {
        type: faker.system.fileType(),
        date: faker.date.past(),
      };
    } else if (type === 'session') {
      sessionDetails = {
        date: faker.date.future(),
      };
    }

    searchItems.push({
      title: faker.lorem.words(faker.number.int({min: 1, max: 10})),
      type,
      subtitle: faker.lorem.words(faker.number.int({min: 1, max: 10})),
      peopleDetails,
      documentDetails,
      sessionDetails,
    });
  }
  return searchItems;
};

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
