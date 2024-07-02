import {
  Dimensions,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import PeoplePageNavigation from './people-navigation';
import {faker} from '@faker-js/faker';
import {defaultpic} from '../constants/constants';
import CircleAvatar from '../Avatar';
import styles from './style';
import ModalPeopleInfo from './modal.people.info';

const Divider = () => (
  <View style={{backgroundColor: 'gold', height: 5, width: '100%'}} />
);

interface IPeopleListProps {
  people: IPeople[];
  handleShowPeopleInfo: (id: string) => void;
}

const PeopleList = ({people, handleShowPeopleInfo}: IPeopleListProps) => {
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
      <TouchableOpacity
        style={{
          margin: 5,
          width: cardWidth,
          flexBasis: flexBasisState,
          height: 450,
          backgroundColor: 'white',
        }}
        onPress={() => handleShowPeopleInfo(item.id)}>
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
      </TouchableOpacity>
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

interface IPeoplePageScreenProps {
  handleSearchClick: () => void;
}

const PeoplePageScreen = (props: IPeoplePageScreenProps) => {
  const {handleSearchClick} = props;
  const [selected, setSelected] = useState<string>('participants');
  const [people, setPeople] = useState<IPeople[]>([]);
  const [selectedPeopleGroup, setSelectedPeopleGroup] = useState<IPeople[]>([]);
  const [selectedPeople, setSelectedPeople] = useState<
    IPeople | null | undefined
  >(null);

  const [showPeopleInfoModal, setShowPeopleInfoModal] =
    useState<boolean>(false);

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

  const handleShowInfoModal = (id: string): void => {
    const selectedPerson = people.find(person => person.id === id);
    if (selectedPerson) {
      setSelectedPeople(selectedPerson);
      setShowPeopleInfoModal(true);
    }
  };

  return (
    <View>
      <ModalPeopleInfo
        show={showPeopleInfoModal}
        handleShowInfo={() => setShowPeopleInfoModal(!showPeopleInfoModal)}
        people={selectedPeople as IPeople}
      />
      <PeoplePageNavigation
        selectedGroup={selected}
        handleNavigationClick={handleClickNavigationItem}
        handleSearchClick={handleSearchClick}
      />
      <PeopleList
        people={selectedPeopleGroup}
        handleShowPeopleInfo={handleShowInfoModal}
      />
    </View>
  );
};

export interface IPeople {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  type: 'participant' | 'coordinator' | 'professor';
  avatar: string; //base64
  country?: string;
  bio?: string;
  nationality: string;
  phone: string;
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
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      jobTitle: faker.person.jobTitle(),
      company: faker.company.name(),
      type: getRandomType(), // change this to have random values,
      avatar: faker.image.avatar() ?? defaultpic,
      country: faker.location.country(),
      bio: faker.lorem.paragraphs(5),
      nationality: faker.person.zodiacSign(),
      phone: faker.phone.number(),
    });
  }

  return people;
};

export default PeoplePageScreen;
