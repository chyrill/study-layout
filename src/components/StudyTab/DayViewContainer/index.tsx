import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {DateRange} from '../TileViewContainer';
import CircleAvatar from '../../Avatar';
import {faker} from '@faker-js/faker';

const DayViewContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.eventDetails}>
          <View style={styles.profileContainer}>
            <View
              style={{
                padding: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CircleAvatar size={150} borderColor={'green'} />
              <Text style={{paddingTop: 10, fontSize: 15, color: 'green'}}>
                {faker.person.fullName()}
              </Text>
            </View>
            <View>
              <Text style={styles.eventTitle}>COACHING ACROSS CULTURES</Text>
              <Text style={styles.eventTime}>08:30 - 12:30</Text>
              <Text style={styles.eventDescription}>
                Key Learnings and Description of Session. Today, working across
                cultures is more crucial than ever before...
              </Text>
            </View>
          </View>
          {/* Document List */}
          <View style={styles.documents}>
            <Text style={styles.documentTitle}>REQUIRED PREPARATION</Text>
            {/* Map through documents */}
            {/* Example static data */}
            <Text style={styles.documentText}>14 Cross Silo Leadership</Text>
            <Text style={styles.documentText}>
              15 To Connect Across Cultures
            </Text>
            <Text style={styles.documentText}>
              13 Leadership Is A Conversation
            </Text>
          </View>
        </View>

        {/* Note Making Area */}
        <TouchableOpacity style={styles.noteButton}>
          <Text style={styles.noteButtonText}>Make a Note</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DayViewContainer;
