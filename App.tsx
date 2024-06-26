/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import {generateRandomEventList} from './src/components/StudyTab/TopNavigation/helpers/helpers';
import {TEventItem} from './src/components/StudyTab/TopNavigation/types/event';
import PeoplePageScreen from './src/components/People';
import {faker} from '@faker-js/faker';
import SearchModal from './src/components/Search';

function App(): React.JSX.Element {
  const events = generateRandomEventList(5);
  const [searchModalVisible, setSearchModalVisible] = useState<boolean>(false);

  const [searchItems, setSearchItems] = useState<ISearchItem[]>([]);

  const [searchedItems, setSearchedItems] = useState<ISearchItem[]>([]);
  const [searchItemType, setSearchItemType] = useState<string>('all');
  const [searchText, setSearchText] = useState<string>('');

  const [selectedEventList, setSelectedEventList] = useState<TEventItem>(
    events.items[0],
  );
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

  return (
    <SafeAreaView style={styles.container}>
      <PeoplePageScreen handleSearchClick={handleSearchClick} />
      <SearchModal
        visible={searchModalVisible}
        handleSearchClick={handleSearchClick}
        items={searchedItems}
        handleTypeSelectionProp={setSearchItemType}
        handleSearchTextChange={setSearchText}
      />
    </SafeAreaView>
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
