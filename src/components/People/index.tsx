import {Dimensions, FlatList, ImageBackground, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import PeoplePageNavigation from './people-navigation';
import {faker} from '@faker-js/faker';
import {defaultpic} from '../constants/constants';
import CircleAvatar from '../Avatar';
import styles from './style';

const Divider = () => (
  <View style={{backgroundColor: 'gold', height: 5, width: '100%'}} />
);

interface IPeopleListProps {
  people: IPeople[];
}

const PeopleList = ({people}: IPeopleListProps) => {
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [numberOfColumns, setNumberOfColumns] = useState<number>(4);
  const [flexBasisState, setFlexBasisState] = useState<string>('25%');
  const [cardWidth, setCardWidth] = useState<number>(0);

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

  useEffect(() => {
    if (isLandscape) {
      setNumberOfColumns(4);
      setFlexBasisState('25%');
      setCardWidth(300);
    } else {
      setNumberOfColumns(3);
      setFlexBasisState('33.33%');
      setCardWidth(300);
    }
  }, [isLandscape]);

  const PeopleItemCard = ({item}: {item: IPeople}) => {
    return (
      <View
        style={{
          margin: 5,
          width: cardWidth,
          flexBasis: flexBasisState,
          height: 450,
          backgroundColor: 'white',
        }}>
        <ImageBackground
          source={{uri: item.avatar}}
          style={styles.peopleItemCardImageBackgorund}
          resizeMode="cover"
          blurRadius={10}>
          <CircleAvatar size={150} source={item.avatar} />
        </ImageBackground>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 25}}>{item.firstName}</Text>
          <Text
            style={{fontSize: 25, textTransform: 'uppercase', paddingTop: 10}}>
            {item.lastName}
          </Text>
          <Text
            style={{fontSize: 14, paddingTop: 15, flexWrap: 'wrap'}}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.jobTitle} {item.jobTitle} {item.jobTitle} {item.jobTitle}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: 'italic',
              color: 'grey',
              paddingTop: 10,
            }}>
            {item.company}
          </Text>
        </View>
        <Divider />
        <Text style={{padding: 15, fontSize: 20, textTransform: 'capitalize'}}>
          {item.type}
        </Text>
      </View>
    );
  };

  return (
    <View style={{margin: 20}}>
      <FlatList
        data={people}
        renderItem={PeopleItemCard}
        numColumns={numberOfColumns}
        key={numberOfColumns}
        keyExtractor={item => item.id}
        contentContainerStyle={{justifyContent: 'center', flexWrap: 'wrap'}}
      />
    </View>
  );
};

const PeoplePageScreen = () => {
  const [selected, setSelected] = useState<string>('participants');
  const [people, setPeople] = useState<IPeople[]>([]);
  const [selectedPeopleGroup, setSelectedPeopleGroup] = useState<IPeople[]>([]);

  useEffect(() => {
    const randomGeneratedPeople = randomPeopleGenerator(50);
    setPeople(randomGeneratedPeople);
    setSelectedPeopleGroup(
      randomGeneratedPeople.filter(person => person.type === 'participant'),
    );
  }, []);

  const handleClickNavigationItem = (value: string) => {
    setSelected(value);
    switch (value) {
      case 'participants':
        setSelectedPeopleGroup(
          people.filter(person => person.type === 'participant'),
        );
        break;
      case 'all':
        setSelectedPeopleGroup(people);
        break;
      default:
        setSelectedPeopleGroup(
          people.filter(person => person.type !== 'participant'),
        );
        break;
    }
  };

  return (
    <View>
      <PeoplePageNavigation
        selectedGroup={selected}
        handleNavigationClick={handleClickNavigationItem}
      />
      <PeopleList people={selectedPeopleGroup} />
    </View>
  );
};

interface IPeople {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  type: 'participant' | 'coordinator' | 'professor';
  avatar: string; //base64
}

const getRandomType = (): 'participant' | 'coordinator' | 'professor' => {
  const types = ['participant', 'coordinator', 'professor'];
  //@ts-ignore
  return types[Math.floor(Math.random() * types.length)];
};

const randomPeopleGenerator = (length: number) => {
  //return an array of people
  const people: IPeople[] = [];
  for (let i = 0; i < length; i++) {
    people.push({
      id: faker.string.alphanumeric(20),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      jobTitle: faker.person.jobTitle(),
      company: faker.company.name(),
      type: getRandomType(), // change this to have random values,
      avatar: faker.image.avatar() ?? defaultpic,
    });
  }

  return people;
};

export default PeoplePageScreen;
