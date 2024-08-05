import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IEvent, IWeeklyEvent} from '../../helpers/event.generator';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

interface IEvenContainerProps {
  selectedWeeklyEvent: IWeeklyEvent | null;
  onEventSelect: (id: string) => void;
}
const EventContainer = (props: IEvenContainerProps) => {
  const {selectedWeeklyEvent, onEventSelect} = props;
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const onLayout = (event: any) => {
    const {width} = event.nativeEvent.layout;
    setContainerWidth(width);
  };
  return (
    <View style={style.eventContainer} onLayout={onLayout}>
      {selectedWeeklyEvent?.type === 'TILE' ? (
        <TileContainer
          events={selectedWeeklyEvent.events}
          parentWidth={containerWidth}
          onEventSelect={onEventSelect}
        />
      ) : (
        <CalendarContainer
          selectedWeeklyEvent={selectedWeeklyEvent}
          onEventSelect={onEventSelect}
        />
      )}
    </View>
  );
};

interface ITileContainerProps {
  events: IEvent[];
  parentWidth: number;
  onEventSelect: (id: string) => void;
}

const TileContainer = (props: ITileContainerProps) => {
  const {events, parentWidth, onEventSelect} = props;
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  useEffect(() => {
    const updateOrientation = () => {
      setIsLandscape(
        Dimensions.get('window').height < Dimensions.get('window').width,
      );
    };
    updateOrientation();
    const subscription = Dimensions.addEventListener(
      'change',
      updateOrientation,
    );
    return () => {
      subscription.remove();
    };
  });

  interface ISessionCardProps {
    item: IEvent;
  }

  const SessionCard = (prop: ISessionCardProps) => {
    const {item} = prop;
    return (
      <TouchableOpacity
        onPress={() => onEventSelect(item.id)}
        style={getLandScapeSessionCard(
          item.groupColor,
          parentWidth,
          isLandscape,
        )}>
        <Text style={style.sessionCardTitle}>{item.title}</Text>
        <Text style={style.sessionStartDate}>
          {moment(item.startDate).format('ddd, MMM DD YYYY HH:mm A')}
        </Text>
        <Text style={{paddingTop: 10}}>{item.location}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={events}
      renderItem={({item}) => <SessionCard item={item} />}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={
        isLandscape ? style.tileLandscapeContainer : style.tilePortraitContainer
      }
      key={isLandscape ? 'landscape' : 'portrait'}
      numColumns={isLandscape ? 3 : 1}
      columnWrapperStyle={isLandscape && style.tileLandscapeColumnWrapper}
    />
  );
};

const style = StyleSheet.create({
  eventContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  tileLandscapeContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  tileLandscapeColumnWrapper: {
    justifyContent: 'space-between',
  },
  tilePortraitContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  sessionCardTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  sessionStartDate: {
    fontSize: 16,
    color: 'green',
    paddingTop: 10,
  },
});

const getLandScapeSessionCard = (
  color: string | null,
  parentWidth?: number,
  isLandscape = false,
) => {
  return {
    backgroundColor: color || 'white',
    width: isLandscape
      ? parentWidth
        ? (parentWidth - 160) / 3
        : 500
      : parentWidth! - 160,
    marginHorizontal: 20,
    marginVertical: 20,
    height: 200,
    maxHeight: 500,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
  };
};

/* Calendar Container */
interface ICalendarContainerProps {
  selectedWeeklyEvent: IWeeklyEvent | null;
  onEventSelect: (id: string) => void;
}

const CalendarContainer = (props: ICalendarContainerProps) => {
  const {selectedWeeklyEvent, onEventSelect} = props;
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const onLayout = (event: any) => {
    const {width} = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', height: 70}}>
        <CalendarDayContainer
          weekStart={selectedWeeklyEvent?.filter.weekStart}
          parentWidth={containerWidth}
        />
      </View>
      <ScrollView
        style={{
          flex: 1,
          height: 120 * 24,
          width: '100%',
        }}
        contentContainerStyle={{flexDirection: 'row'}}
        onLayout={onLayout}>
        <CalendarTimeContainer />
        <CalendarEventsPerDay
          parentWidth={containerWidth}
          events={selectedWeeklyEvent?.events}
          weekStart={selectedWeeklyEvent?.filter.weekStart}
          onEventSelect={onEventSelect}
        />
      </ScrollView>
    </View>
  );
};

const CalendarTimeContainer = () => {
  return (
    <View style={{width: 100}}>
      {Array.from({length: 24}, (_, index) => (
        <View
          style={{
            height: 120,
            width: '100%',
            alignItems: 'center',
          }}
          key={index}>
          <Text style={{color: 'white'}}>{index}:00</Text>
        </View>
      ))}
    </View>
  );
};

interface ICalendarDayContainerProps {
  weekStart: string | undefined;
  parentWidth?: number;
}

const CalendarDayContainer = (props: ICalendarDayContainerProps) => {
  const {weekStart, parentWidth} = props;
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{width: 100, height: '100%'}} />
      <View
        style={{
          flex: 1,
          height: 70,
          flexDirection: 'row',
        }}>
        {Array.from({length: 7}, (_, index) => {
          const day = moment(weekStart).add(index, 'day');
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: parentWidth ? (parentWidth - 100) / 7 : 100,
                flexDirection: 'row',
              }}
              key={index}>
              <Text style={{color: 'white', paddingRight: 5, fontSize: 16}}>
                {day.format('ddd')}
              </Text>
              <Text style={{color: 'white', fontSize: 16}}>
                {day.format('DD')}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

interface ICalendarEventsPerDayProps {
  parentWidth?: number;
  weekStart?: string;
  events?: IEvent[];
  onEventSelect: (id: string) => void;
}

const CalendarEventsPerDay = (props: ICalendarEventsPerDayProps) => {
  const {parentWidth, weekStart, events, onEventSelect} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        width: parentWidth ? parentWidth - 100 : '100%',
      }}>
      {Array.from({length: 7}, (_, index) => {
        const startDay = moment(weekStart).add(index, 'day');
        const dayEvents = events?.filter((event: IEvent) => {
          return moment(moment(event.startDate).startOf('day')).isSame(
            startDay.startOf('day'),
            'day',
          );
        });
        return (
          <View
            style={{
              height: 24 * 120,
              width: parentWidth ? (parentWidth - 100 - 7 * 4) / 7 : 100,
              marginHorizontal: 2,
              backgroundColor: '#00b9006b',
              alignItems: 'center',
              position: 'relative',
            }}
            key={index}>
            {dayEvents?.map((event, index) => {
              const startOfDay = moment(startDay).startOf('day');
              const eventStart = moment(event.startDate);
              const minutesFromStartOfDay = eventStart.diff(
                startOfDay,
                'minutes',
              );
              return (
                <TouchableOpacity
                  onPress={() => onEventSelect(event.id)}
                  style={{
                    backgroundColor: event.groupColor || 'white',
                    width: '100%',
                    height: event.duration * 2,
                    position: 'absolute',
                    top: minutesFromStartOfDay * 2,
                    marginVertical: 5,
                    borderRadius: 2,
                    padding: 5,
                  }}
                  key={index}>
                  <View style={{flexDirection: 'row', overflow: 'hidden'}}>
                    <Text style={{color: 'green'}}>
                      {moment(event.startDate).format('HH:mm')}
                    </Text>
                    <Text
                      style={{color: 'black'}}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {' | ' + event.location}
                    </Text>
                  </View>
                  <Text style={{fontSize: 15, fontWeight: 600, paddingTop: 5}}>
                    {event.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

// const calendarStyle = StyleSheet.create({});

export default EventContainer;
