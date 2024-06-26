import {
  Dimensions,
  FlatList,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {useEffect, useState} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {ISearchItem} from '../../../App';
import CircleAvatar from '../Avatar';

interface ITypes {
  id: string;
  name: string;
}

const types: ITypes[] = [
  {
    id: '1',
    name: 'All',
  },
  {
    id: '2',
    name: 'Annoucements',
  },
  {
    id: '3',
    name: 'Tasks',
  },
  {
    id: '4',
    name: 'Documents',
  },
  {
    id: '5',
    name: 'Notes',
  },
  {
    id: '6',
    name: 'People',
  },
  {
    id: '7',
    name: 'Sessions',
  },
];

interface ISearchItemComponentProps {
  item: ISearchItem;
  index: number;
}

const SearchItemComponent = (props: ISearchItemComponentProps) => {
  const {item, index} = props;

  switch (item.type) {
    case 'documents':
      return (
        <TouchableOpacity key={index} style={styles.searchItemContainer(index)}>
          <View style={styles.searchItemInsideContainer}>
            <Text style={styles.searchItemTitleText} numberOfLines={1}>
              {item.title}
            </Text>
            <Text
              style={{
                color: 'white',
                width: '25%',
              }}
              numberOfLines={1}>
              {item.subtitle}
            </Text>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                }}>
                <Text
                  style={{
                    color: 'white',
                    padding: 5,
                  }}>
                  {item.documentDetails?.type}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: 'white',
                width: '25%',
                textTransform: 'capitalize',
              }}
              numberOfLines={1}>
              {item.documentDetails?.date.toDateString()}
            </Text>
          </View>
        </TouchableOpacity>
      );
    case 'notes':
      return (
        <TouchableOpacity key={index} style={styles.searchItemContainer(index)}>
          <View style={styles.searchItemInsideContainer}>
            <Text style={styles.searchItemTitleText} numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    case 'annoucement':
      return (
        <TouchableOpacity key={index} style={styles.searchItemContainer(index)}>
          <View style={styles.searchItemInsideContainer}>
            <Text style={styles.searchItemTitleText} numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    case 'tasks':
      return (
        <TouchableOpacity key={index} style={styles.searchItemContainer(index)}>
          <View style={styles.searchItemInsideContainer}>
            <Text style={styles.searchItemTitleText} numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    case 'people':
      return (
        <TouchableOpacity key={index} style={styles.searchItemContainer(index)}>
          <View style={styles.searchItemInsideContainer}>
            <Text style={styles.searchItemTitleText} numberOfLines={1}>
              {item.title}
            </Text>
            <Text
              style={{
                color: 'white',
                width: '25%',
                textTransform: 'capitalize',
              }}
              numberOfLines={1}>
              {item.peopleDetails?.type}
            </Text>
            <CircleAvatar size={50} source={item.peopleDetails?.avatar} />
          </View>
        </TouchableOpacity>
      );
    case 'session':
      return (
        <TouchableOpacity key={index} style={styles.searchItemContainer(index)}>
          <View style={styles.searchItemInsideContainer}>
            <Text style={styles.searchItemTitleText} numberOfLines={1}>
              {item.title}
            </Text>
            <Text
              style={{
                color: 'white',
                width: '25%',
                textTransform: 'capitalize',
              }}
              numberOfLines={1}>
              {item.subtitle}
            </Text>
            <View style={{width: '25%'}}>
              <Text />
            </View>
            <Text
              style={{
                color: 'white',
                width: '25%',
                textTransform: 'capitalize',
              }}
              numberOfLines={1}>
              {item.sessionDetails?.date.toDateString()}
            </Text>
          </View>
        </TouchableOpacity>
      );
  }
};

interface ISearchItemGroupProps {
  items: ISearchItem[];
  type: string;
  selectedType: string;
}

const SearchItemGroup = ({
  items,
  type,
  selectedType,
}: ISearchItemGroupProps) => {
  if (items.length <= 0) {
    return null;
  } else {
    return (
      <View style={{paddingVertical: 20}}>
        {selectedType === 'all' ? (
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 24,
              textTransform: 'capitalize',
              paddingBottom: 10,
            }}>
            {type}
          </Text>
        ) : null}
        {items.map((item, index) => (
          <SearchItemComponent key={index} item={item} index={index} />
        ))}
      </View>
    );
  }
};

interface ITypeSelectionProps {
  currentSelected: string;
  handleTypeSelection: (value: string) => void;
}

const TypeSelection = (props: ITypeSelectionProps) => {
  const {currentSelected, handleTypeSelection} = props;

  const renderItem = ({item}: {item: ITypes}) => {
    const isSelected = currentSelected === item.name.toLowerCase();
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: 100,
          backgroundColor: isSelected ? 'white' : null,
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
        onPress={() => handleTypeSelection(item.name.toLowerCase())}>
        <Text style={{color: isSelected ? 'black' : 'white'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={types}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id.toString()}
      numColumns={7}
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        alignItems: 'center',
      }}
    />
  );
};

interface ISeachMdoalProps {
  visible: boolean;
  handleSearchClick: () => void;
  items: ISearchItem[];
  handleTypeSelectionProp: (value: string) => void;
  handleSearchTextChange: (value: string) => void;
}

const SearchModal = (data: ISeachMdoalProps) => {
  const {
    visible,
    handleSearchClick,
    items,
    handleTypeSelectionProp,
    handleSearchTextChange,
  } = data;
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [typeSelected, setTypeSelected] = useState<string>('all');

  useEffect(() => {
    const detectOrientation = () => {
      const {width, height} = Dimensions.get('window');
      if (width > height) {
        setIsLandscape(true);
      } else {
        setIsLandscape(false);
      }
    };

    detectOrientation();
    const subscription = Dimensions.addEventListener(
      'change',
      detectOrientation,
    );
    return () => subscription.remove();
  }, []);

  const handleTypeSelection = (value: string) => {
    setTypeSelected(value);
    handleTypeSelectionProp(value);
  };

  const groupedItems = items.reduce(
    (groups: Record<string, ISearchItem[]>, item: ISearchItem) => {
      (groups[item.type] = groups[item.type] || []).push(item);
      return groups;
    },
    {},
  );

  const groupedItemsArray = Object.keys(groupedItems).map(type => ({
    type,
    items: groupedItems[type],
  }));
  return (
    <Modal
      visible={visible}
      animationType="slide"
      statusBarTranslucent={true}
      transparent={true}
      onRequestClose={handleSearchClick}>
      <View style={styles.modalViewContainer}>
        <View
          style={{
            width: isLandscape ? '70%' : '90%',
            ...styles.mainContainer,
          }}>
          <View style={styles.modalTopContainer}>
            <TouchableOpacity onPress={handleSearchClick}>
              <Text style={{fontSize: 20, color: 'white', marginEnd: 20}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <View style={styles.searchTextBar}>
              <FontAwesomeIcon
                name="search"
                size={20}
                color="white"
                style={{padding: 8, marginEnd: 10}}
              />
              <TextInput
                style={{width: '100%', color: 'white'}}
                onChangeText={handleSearchTextChange}
              />
            </View>
          </View>
          <View style={styles.modalTopContainerDivider} />
          <View
            style={{
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TypeSelection
              handleTypeSelection={handleTypeSelection}
              currentSelected={typeSelected}
            />
          </View>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <FlatList
              data={groupedItemsArray.filter(data => data.items.length > 0)}
              renderItem={({item}) => (
                <SearchItemGroup
                  items={item.items}
                  type={item.type}
                  selectedType={typeSelected}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;
