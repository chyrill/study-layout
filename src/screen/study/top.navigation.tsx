import styles, {
  getTopNavigationSelectionButtonContainerStyle,
  getTopNavigationSelectionTextSelectedStyle,
} from './style';
import {View, Text, TouchableOpacity} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

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
        {['day'].includes(selectedTab) ? (
          <FAIcon.Button
            name="chevron-left"
            size={20}
            style={{paddingHorizontal: 10}}
            color="white"
            backgroundColor="transparent">
            <Text style={{color: 'white', fontSize: 18}}>Schedule</Text>
          </FAIcon.Button>
        ) : null}
      </View>
      <View style={styles.topNavigationSelectionContainer}>
        <TouchableOpacity
          style={getTopNavigationSelectionButtonContainerStyle(
            ['schedule', 'day'].includes(selectedTab),
            true,
          )}
          onPress={() => setSelectedTab('schedule')}>
          <Text
            style={getTopNavigationSelectionTextSelectedStyle(
              ['schedule', 'day'].includes(selectedTab),
            )}>
            Schedule
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getTopNavigationSelectionButtonContainerStyle(
            selectedTab === 'readinglist',
            false,
          )}
          onPress={() => setSelectedTab('readinglist')}>
          <Text
            style={getTopNavigationSelectionTextSelectedStyle(
              selectedTab === 'readinglist',
            )}>
            Reading List
          </Text>
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
