import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface IPeoplePageNavigationProps {
  handleNavigationClick: (value: string) => void;
  selectedGroup: string;
  handleSearchClick: () => void;
}

const PeoplePageNavigation = ({
  handleNavigationClick,
  handleSearchClick,
  selectedGroup,
}: IPeoplePageNavigationProps) => {
  return (
    <View style={styles.peoplePageNavigationContainer}>
      <View style={styles.peoplePageNavigationItemContainer}>
        <View style={styles.peoplePageNavigationLeftIcon}>
          <Icon.Button
            name="search"
            size={20}
            color="white"
            onPress={handleSearchClick}
            backgroundColor="transparent"
          />
          <Icon.Button
            name="refresh"
            size={20}
            color="white"
            backgroundColor="transparent"
          />
        </View>
        <View style={styles.peoplePageNavigationCenter}>
          <TouchableOpacity
            onPress={() => handleNavigationClick('all')}
            style={
              selectedGroup === 'all'
                ? styles.peoplePageNavigationButtonSelectedLeft
                : null
            }>
            <Text
              style={
                selectedGroup === 'all'
                  ? styles.peoplePageNavigationSelectedText
                  : styles.peoplePageNavigationUnselectedText
              }>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigationClick('programme_team')}
            style={
              selectedGroup === 'programme_team'
                ? styles.peoplePageNavigationButtonSelectedCenter
                : null
            }>
            <Text
              style={
                selectedGroup === 'programme_team'
                  ? styles.peoplePageNavigationSelectedText
                  : styles.peoplePageNavigationUnselectedText
              }>
              Programme Team
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigationClick('participants')}
            style={
              selectedGroup === 'participants'
                ? styles.peoplePageNavigationButtonSelectedRight
                : null
            }>
            <Text
              style={
                selectedGroup === 'participants'
                  ? styles.peoplePageNavigationSelectedText
                  : styles.peoplePageNavigationUnselectedText
              }>
              Participants
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.peoplePageNavaigationRightIcon}>
          <Icon.Button
            name="envelope"
            size={20}
            color="white"
            backgroundColor="transparent"
          />
          <MaterialIcon.Button
            name="contacts"
            size={20}
            color="white"
            backgroundColor="transparent"
          />
        </View>
      </View>
    </View>
  );
};

export default PeoplePageNavigation;
