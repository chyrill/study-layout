import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {TEvent, TEventItem} from '../TopNavigation/types/event';
import {transformDate} from '../TopNavigation/helpers/helpers';
import {useEffect, useState} from 'react';
import CircleAvatar from '../../Avatar';

const DateRange = ({weekEnd, weekStart, timezone}: any) => {
  return (
    <View style={styles.dateRange}>
      <Text style={styles.textDateRange}>
        {transformDate(weekStart)} - {transformDate(weekEnd)}
      </Text>
      <View style={styles.gmtContainer}>
        <Text style={styles.textColorWhite}>{timezone}</Text>
      </View>
    </View>
  );
};

interface IContainer {
  data: TEventItem;
}

interface IEventItemComponent {
  data: TEvent;
}

const EventItemComponent = ({data}: IEventItemComponent) => {
  return (
    <TouchableOpacity style={styles.eventItemContent}>
      <Text style={styles.eventTitle}>{data.title}</Text>
      <Text style={styles.eventTime}>{data.schedule.toISOString()}</Text>
      <Text style={styles.eventPlatform}>{data.location}</Text>
      <View style={styles.hostContainer}>
        <Text style={styles.hostText}>Host</Text>
        <CircleAvatar />
      </View>
    </TouchableOpacity>
  );
};

const TileViewContainer = (props: IContainer) => {
  const [orientation, setOrientation] = useState<string>('portrait');

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

  const numColumns = orientation === 'landscape' ? 3 : 1;
  const marginHorizontal = 16;
  const itemWidth =
    (screenWidth - marginHorizontal * 2 * numColumns) / numColumns;

  return (
    <View style={styles.container}>
      <DateRange
        weekEnd={props.data.weekEnd}
        weekStart={props.data.weekStart}
        timezone={props.data.timezone}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {props.data.events.map((event, index) => (
          <View key={index} style={[styles.eventItem, {width: itemWidth - 30}]}>
            <EventItemComponent data={event} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TileViewContainer;
