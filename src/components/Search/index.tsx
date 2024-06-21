import {
  Button,
  Dimensions,
  FlatList,
  Modal,
  ScrollView,
  Text,
  TextInput,
  Touchable,
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
  if (item.type === 'annoucement') {
    console.log(item);
  }

  switch (item.type) {
    case 'document':
      return (
        <View
          key={index}
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: index % 2 === 0 ? 'lightgray' : null,
          }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: index % 2 === 0 ? 'white' : 'black',
                width: '25%',
              }}
              numberOfLines={1}>
              {item.title}
            </Text>
            <Text
              style={{
                color: index % 2 === 0 ? 'white' : 'black',
                width: '25%',
              }}
              numberOfLines={1}>
              {item.subtitle}
            </Text>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: index % 2 === 0 ? 'white' : 'black',
                }}>
                <Text
                  style={{
                    color: index % 2 === 0 ? 'white' : 'black',
                    padding: 5,
                  }}>
                  {item.documentDetails?.type}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: index % 2 === 0 ? 'white' : 'black',
                width: '25%',
                textTransform: 'capitalize',
              }}
              numberOfLines={1}>
              {item.documentDetails?.date.toDateString()}
            </Text>
          </View>
        </View>
      );
    case 'note':
      return (
        <View
          key={index}
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: index % 2 === 0 ? 'lightgray' : null,
          }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: index % 2 === 0 ? 'white' : 'black',
                width: '25%',
              }}
              numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </View>
      );
    case 'annoucement':
      return (
        <View
          key={index}
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: index % 2 === 0 ? 'lightgray' : null,
          }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: index % 2 === 0 ? 'white' : 'black',
                width: '25%',
              }}
              numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </View>
      );
    case 'task':
      return (
        <View
          key={index}
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: index % 2 === 0 ? 'lightgray' : null,
          }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: index % 2 === 0 ? 'white' : 'black',
                width: '25%',
              }}
              numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </View>
      );
    case 'people':
      return (
        <View
          key={index}
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: index % 2 === 0 ? 'lightgray' : null,
          }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: index % 2 === 0 ? 'white' : 'black',
                width: '25%',
                textTransform: 'capitalize',
              }}
              numberOfLines={1}>
              {item.title}
            </Text>
            <Text
              style={{
                color: index % 2 === 0 ? 'white' : 'black',
                width: '25%',
                textTransform: 'capitalize',
              }}
              numberOfLines={1}>
              {item.peopleDetails?.type}
            </Text>
            <CircleAvatar size={50} source={item.peopleDetails?.avatar} />
          </View>
        </View>
      );
    case 'session':
      return (
        <View
          key={index}
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: index % 2 === 0 ? 'lightgray' : null,
          }}>
          <View
            style={{
              flex: 1,
              padding: 10,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: index % 2 === 0 ? 'white' : 'black',
                width: '25%',
                textTransform: 'capitalize',
              }}
              numberOfLines={1}>
              {item.title}
            </Text>
            <Text
              style={{
                color: index % 2 === 0 ? 'white' : 'black',
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
                color: index % 2 === 0 ? 'white' : 'black',
                width: '25%',
                textTransform: 'capitalize',
              }}
              numberOfLines={1}>
              {item.sessionDetails?.date.toDateString()}
            </Text>
          </View>
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
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
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
      contentContainerStyle={{flex: 1}}
    />
  );
};

interface ISeachMdoalProps {
  visible: boolean;
  handleSearchClick: () => void;
  items: ISearchItem[];
}

const SearchModal = (data: ISeachMdoalProps) => {
  const {visible, handleSearchClick, items} = data;
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
    console.log(value);
    setTypeSelected(value);
  };

  const groupedItems = items.reduce(
    (groups: Record<string, ISearchItem[]>, item: ISearchItem) => {
      (groups[item.type] = groups[item.type] || []).push(item);
      return groups;
    },
    {},
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      statusBarTranslucent={true}
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
              <TextInput style={{width: '100%'}} />
            </View>
          </View>
          <View style={styles.modalTopContainerDivider} />
          <View
            style={{
              margin: 20,
              flex: 1,
              flexDirection: 'column',
            }}>
            <TypeSelection
              handleTypeSelection={handleTypeSelection}
              currentSelected={typeSelected}
            />
            <View style={{flex: 1}}>
              <ScrollView>
                {Object.keys(groupedItems).map((type, index) => (
                  <View key={index} style={{paddingVertical: 20}}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {type}
                    </Text>
                    {groupedItems[type].map((item, index) => (
                      <SearchItemComponent
                        key={index}
                        item={item}
                        index={index}
                      />
                    ))}
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;
