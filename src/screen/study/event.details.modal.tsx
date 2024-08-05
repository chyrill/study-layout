import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IEvent} from '../../helpers/event.generator';
import moment from 'moment';
import CircleAvatar from '../../components/Avatar';

interface IEventDetailsModalProps {
  show: boolean;
  onHandleClose: () => void;
  event: IEvent | null;
}

const EventDetailsModal = (props: IEventDetailsModalProps) => {
  const {show, onHandleClose, event} = props;
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={show}
      onRequestClose={onHandleClose}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.topBar}>
            <TouchableOpacity
              onPress={onHandleClose}
              style={{position: 'absolute', left: 25}}>
              <Text style={{color: 'white', fontSize: 18}}>Close</Text>
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 18}}>
              Session Information
            </Text>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.eventHeader}>
              <Text style={{fontSize: 24, fontWeight: 700}}>
                {event?.title}
              </Text>
              <Text style={{marginVertical: 25, fontSize: 16, fontWeight: 500}}>
                {moment(event?.startDate).format('HH:mm')} -{' '}
                {moment(event?.startDate)
                  .add(event?.duration, 'minutes')
                  .format('HH:mm')}{' '}
                {event?.location}
              </Text>
              <CircleAvatar size={100} />
              <Text style={{color: 'green', fontSize: 16, marginVertical: 25}}>
                {event?.host.first_name} {event?.host.last_name}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'green',
                width: '100%',
                height: 1,
              }}
            />
            <ScrollView style={{flex: 1, marginVertical: 20}}>
              <Text style={{fontSize: 16, textAlign: 'left'}}>
                {event?.description}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    flex: 1,
    maxHeight: '95%',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  topBar: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  mainContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  eventHeader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default EventDetailsModal;
