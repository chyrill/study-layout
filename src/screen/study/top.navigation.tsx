import styles from './style';
import {View, Text, TouchableOpacity} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIIcon from 'react-native-vector-icons/MaterialIcons';

interface ITopNavigationProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const TopNavigation = (props: ITopNavigationProps) => {
  const {selectedTab, setSelectedTab} = props;

  return (
    <View style={styles.topBarContainer}>
      <View style={styles.topNavigationButtonContainer}>
        <FAIcon
          name="search"
          size={20}
          style={{paddingHorizontal: 10}}
          color="white"
        />
        <FAIcon
          name="refresh"
          size={20}
          style={{paddingHorizontal: 10}}
          color="white"
        />
      </View>
      <View style={styles.topNavigationSelectionContainer}>
        <TouchableOpacity style={{width: 100, alignItems: 'center'}}>
          <Text style={{color: 'white'}}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 100, alignItems: 'center'}}>
          <Text style={{color: 'white'}}>Reading list</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topNavigationButtonContainer}>
        <FAIcon
          name="star"
          size={20}
          style={{paddingHorizontal: 10}}
          color="white"
        />
        <FAIcon
          name="desktop"
          size={20}
          style={{paddingHorizontal: 10}}
          color="orange"
        />
        <FAIcon
          name="calendar"
          size={20}
          style={{paddingHorizontal: 10}}
          color="white"
        />
      </View>
    </View>
  );
};

export default TopNavigation;
