import moment from 'moment';
import {Text, TouchableOpacity, View} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {IDailyEvent, IWeeklyEvent} from '../../helpers/event.generator';

interface IDateNavigationComponentProps {
  handleChangeWeek: (value: string) => void;
  selectedWeeklyEvent: IWeeklyEvent | null;
}

const DateNavigationComponent = (props: IDateNavigationComponentProps) => {
  const {handleChangeWeek, selectedWeeklyEvent} = props;
  return (
    <View
      style={{
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {selectedWeeklyEvent?.prevCourseId ? (
          <TouchableOpacity
            onPress={() =>
              handleChangeWeek(selectedWeeklyEvent?.prevCourseId!)
            }>
            <FaIcon name="chevron-left" size={28} color={'white'} />
          </TouchableOpacity>
        ) : null}
        <Text style={{color: 'white', fontSize: 28, paddingHorizontal: 20}}>
          {moment(selectedWeeklyEvent?.filter.weekStart).format('DD MMM')} -{' '}
          {moment(selectedWeeklyEvent?.filter.weekEnd).format('DD MMM')}
        </Text>
        {selectedWeeklyEvent?.nextCourseId ? (
          <TouchableOpacity
            onPress={() =>
              handleChangeWeek(selectedWeeklyEvent?.nextCourseId!)
            }>
            <FaIcon name="chevron-right" size={28} color={'white'} />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={{position: 'absolute', left: 50, zIndex: 1}}>
        <Text style={{color: 'white', fontSize: 12}}>GMT+08</Text>
      </View>
    </View>
  );
};
export default DateNavigationComponent;

interface IDayDateNavigationComponentProps {
  selectedDailyEvent: IDailyEvent | null;
  handleChangeDay: (value: string) => void;
}

export const DayDateNavigationComponent = (
  props: IDayDateNavigationComponentProps,
) => {
  const {selectedDailyEvent, handleChangeDay} = props;

  return (
    <View
      style={{
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {selectedDailyEvent?.prevDailyEventId ? (
          <TouchableOpacity
            onPress={() =>
              handleChangeDay(selectedDailyEvent?.prevDailyEventId!)
            }>
            <FaIcon name="chevron-left" size={28} color={'white'} />
          </TouchableOpacity>
        ) : null}
        {selectedDailyEvent?.type === 'TILE' ? (
          <Text style={{color: 'white', fontSize: 28, paddingHorizontal: 20}}>
            {moment(selectedDailyEvent?.filter.dateStart).format('DD MMM YYYY')}{' '}
            - {moment(selectedDailyEvent?.filter.dateEnd).format('DD MMM YYYY')}
          </Text>
        ) : (
          <Text style={{color: 'white', fontSize: 28, paddingHorizontal: 20}}>
            {moment(selectedDailyEvent?.filter.dateStart).format('DD MMM YYYY')}
          </Text>
        )}
        {selectedDailyEvent?.nextDailyEventId ? (
          <TouchableOpacity
            onPress={() =>
              handleChangeDay(selectedDailyEvent?.nextDailyEventId!)
            }>
            <FaIcon name="chevron-right" size={28} color={'white'} />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={{position: 'absolute', left: 50, zIndex: 1}}>
        <Text style={{color: 'white', fontSize: 12}}>GMT+08</Text>
      </View>
    </View>
  );
};
