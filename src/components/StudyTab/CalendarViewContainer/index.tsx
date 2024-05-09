import React, {useEffect, useRef, useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import styles from './styles';
import {faker} from '@faker-js/faker';

interface IEventDayListProps {
  data: {
    day: string;
    date: string;
  };
  index: number;
  orientation: string;
}

const EventDayList = ({data, index, orientation}: IEventDayListProps) => {
  const [events, setEvents] = useState(generateEvent());
  console.log(events);
  return (
    <View style={[styles.fakeContent]} key={index}>
      <View style={styles.dayTextContainer}>
        <Text style={styles.dayText}>
          {data.day} {data.date}
        </Text>
      </View>
      <View style={styles.eventContainer}>
        {events.map((event, index) => (
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: event.duration,
              position: 'absolute',
              top: event.time * 60,
              padding: 5,
            }}
            key={index}>
            <View style={{flexDirection: 'row'}}>
              <Text>Time | </Text>
              <Text numberOfLines={1} ellipsizeMode="tail">
                {event.location}
              </Text>
            </View>
            <Text
              style={styles.eventTitleText}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {event.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const CalendarSchedule = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [orientation, setOrientation] = useState<string>('portrait');

  const scrollViewRef = useRef(null);

  const times = Array.from({length: 24}, (_, i) => `${i}:00`); // 24-hour format

  const days = getWeekDaysWithDates();

  const handleScroll = (event: any) => {
    setScrollPosition(event.nativeEvent.contentOffset.y);
  };

  const restoreScrollPosition = () => {
    scrollViewRef.current?.scrollTo({y: scrollPosition, animated: false});
  };

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width,
  );

  useEffect(() => {
    const dimensionChangeHandler = () => {
      const {width, height} = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
      setScreenWidth(width);
    };

    const subscription = Dimensions.addEventListener(
      'change',
      dimensionChangeHandler,
    );
    dimensionChangeHandler(); // Perform an initial check

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Fixed Date Header */}
      <View style={styles.dateHeader}>
        <Text style={styles.dateHeaderText}>17 Jun - 23 Jun</Text>
      </View>

      {/* Scrollable Area for both Time and Events */}
      <ScrollView
        style={styles.scrollContainer}
        onScroll={handleScroll}
        onContentSizeChange={restoreScrollPosition}
        scrollEventThrottle={16}>
        <View style={{flexDirection: 'row', flex: 1, minHeight: '100%'}}>
          <View style={styles.timeColumn}>
            {times.map((time, index) => (
              <Text key={index} style={styles.timeText}>
                {time}
              </Text>
            ))}
          </View>

          {/* Main Event Area */}
          <View style={styles.mainEventArea}>
            {days.map((x: any, index) => (
              <EventDayList
                data={x}
                index={index}
                orientation={orientation}
                key={index}
              />
            ))}
            {/* Simulated content, replace with your actual content */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

function getWeekDaysWithDates(currentDate = new Date()) {
  // Start with the current date
  const weekStart = new Date(
    currentDate.setDate(currentDate.getDate() - currentDate.getDay()),
  );

  const weekDays = [];

  // Array of day names for reference
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Generate the days of the week with their dates
  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(weekStart);
    dayDate.setDate(dayDate.getDate() + i);
    weekDays.push({
      day: dayNames[dayDate.getDay()],
      date: dayDate.getDate(),
    });
  }

  return weekDays;
}

const generateEvent = () => {
  return Array.from({length: faker.number.int({min: 0, max: 4})}, (_, i) => {
    return {
      title: faker.company.name(),
      time: faker.date.anytime().getHours(),
      duration: faker.number.int({max: 120, min: 30}),
      location: faker.location.country(),
    };
  });
};

export default CalendarSchedule;
