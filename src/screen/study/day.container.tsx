import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IAttachment, IDailyEvent, IEvent} from '../../helpers/event.generator';
import moment from 'moment';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import CircleAvatar from '../../components/Avatar';

interface IDayViewContainerProps {
  selectedDailyEvent: IDailyEvent | null;
  selectEvent: (id: string) => void;
}

const DayViewContainer = (props: IDayViewContainerProps) => {
  const {selectedDailyEvent, selectEvent} = props;
  return (
    <View style={dayViewContainerStyle.container}>
      <View style={dayViewContainerStyle.innerContainer}>
        <FlatList
          data={selectedDailyEvent?.events}
          renderItem={({item}) => (
            <SessionCard event={item} onSelectEvent={selectEvent} />
          )}
          keyExtractor={item => item.id}
          style={dayViewContainerStyle.flatlistContainer}
          contentContainerStyle={{alignItems: 'center'}}
        />
      </View>
    </View>
  );
};

const dayViewContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    margin: 10,
  },
  flatlistContainer: {
    width: '100%',
  },
});

interface ISessionCardProps {
  event: IEvent;
  onSelectEvent: (id: string) => void;
}

const SessionCard = (props: ISessionCardProps) => {
  const {event, onSelectEvent} = props;
  return (
    <View style={sessionStyle.container}>
      <View
        style={{
          width: 800,
          backgroundColor: 'white',
          padding: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CircleAvatar size={100} />
          <Text style={{color: 'green', marginTop: 10}}>
            {event.host.first_name} {event.host.last_name}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text numberOfLines={1} style={{fontSize: 26}}>
            {event.title}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 16, color: 'green', fontWeight: 'bold'}}>
              {moment(event.startDate).format('HH:mm')} -{' '}
              {moment(event.startDate)
                .add(event.duration, 'minutes')
                .format('HH:mm')}
            </Text>
            <Text style={{fontSize: 16, color: 'grey', marginLeft: 10}}>
              {event.location} - Everyone
            </Text>
            <View style={{flex: 1, alignItems: 'flex-end', marginRight: 10}}>
              <FAIcon.Button
                onPress={() => onSelectEvent(event.id)}
                color="grey"
                size={16}
                name="chevron-right"
                backgroundColor="transparent"
              />
            </View>
          </View>
          <View style={{marginVertical: 15}}>
            <Text style={{fontSize: 16}} ellipsizeMode="tail" numberOfLines={3}>
              {event.description}
            </Text>
          </View>
        </View>
      </View>
      {event.handouts.length > 0 ? (
        <>
          <View style={sessionStyle.bottomContainer}>
            <Text style={sessionStyle.bottomContainerTitle}>Handouts</Text>
          </View>
          <FlatList
            data={event.handouts}
            renderItem={({item}) => <AttachmentItem handout={item} />}
            keyExtractor={item => item.id}
          />
        </>
      ) : null}
      <View style={sessionStyle.bottomContainer}>
        <Text style={sessionStyle.bottomContainerTitle}>Make a note</Text>
      </View>
      <View style={sessionStyle.bottomContainerMakeNoteContainer}>
        <FAIcon.Button
          style={sessionStyle.makeNoteButton}
          name="text-height"
          size={20}
          color="orange"
          backgroundColor={'transparent'}
        />
        <FAIcon.Button
          style={sessionStyle.makeNoteButton}
          name="camera-retro"
          size={20}
          color="orange"
          backgroundColor={'transparent'}
        />
      </View>
    </View>
  );
};

const AttachmentItem = (props: {handout: IAttachment}) => {
  const {handout} = props;

  return (
    <View style={sessionStyle.attachmentItemContainer}>
      <View
        style={{
          padding: 20,
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 100,
            borderColor: 'grey',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {handout.is_completed ? (
            <FAIcon name="check" color="green" size={40} />
          ) : null}
        </View>
      </View>
      <Text style={{fontSize: 18, width: 400}} numberOfLines={1}>
        {handout.title}
      </Text>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderColor: 'grey',
          borderWidth: 1,
          marginLeft: 10,
        }}>
        <Text style={{fontSize: 12, color: 'grey', fontWeight: 800}}>
          {handout.type}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end', marginRight: 20}}>
        <FAIcon
          name={handout.is_favorite ? 'star' : 'star-o'}
          color="orange"
          size={20}
        />
      </View>
    </View>
  );
};
const sessionStyle = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
  bottomContainer: {
    width: 700,
    backgroundColor: 'whitesmoke',
    padding: 20,
  },
  bottomContainerMakeNoteContainer: {
    flexDirection: 'row',
    width: 700,
    backgroundColor: 'white',
  },
  bottomContainerTitle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 800,
    color: 'grey',
  },
  makeNoteButton: {
    flex: 1,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  attachmentItemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 700,
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default DayViewContainer;
