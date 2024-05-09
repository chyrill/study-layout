import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {DateRange} from '../TileViewContainer';
import CircleAvatar from '../../Avatar';
import {faker} from '@faker-js/faker';
import CircularCheckbox from '../../CircularCheckBox';
import ActivityCard from './activityCard';

const SessionCard = () => {
  return (
    <View style={styles.eventDetails}>
      <View style={styles.profileContainer}>
        <View style={styles.eventDetailProfileContainer}>
          <CircleAvatar size={120} borderColor={'green'} />
          <Text style={styles.eventDetailProfileContainerName}>
            {faker.person.fullName()}
          </Text>
        </View>
        <View style={styles.eventInformation}>
          <Text style={styles.eventTitle}>{faker.company.name()}</Text>
          <View style={{flexDirection: 'row', width: '100%', paddingTop: 30}}>
            <Text style={styles.eventTime}>08:30 - 12:30 </Text>
            <Text style={(styles.eventTime, {color: 'black', fontSize: 18})}>
              - {faker.location.country()}
            </Text>
          </View>
          <Text style={styles.eventDescription} numberOfLines={3}>
            {faker.lorem.paragraphs(3)}
          </Text>
        </View>
      </View>
      {/* Document List */}
      <View style={styles.documents}>
        <Text style={styles.documentTitle}>REQUIRED PREPARATION</Text>
        {/* Map through documents */}
        {/* Example static data */}
        <View style={styles.documentContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CircularCheckbox isChecked={true} onToggle={() => {}} size={50} />
            <Text style={styles.documentText}>14 Cross Silo Leadership</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const DayViewContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <SessionCard />
        <ActivityCard />
      </ScrollView>
    </View>
  );
};

export default DayViewContainer;
