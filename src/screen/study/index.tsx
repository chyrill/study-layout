import {View} from 'react-native';
import TopNavigation from './top.navigation';
import styles from './style';
import {IDailyEvent, IEvent, IWeeklyEvent} from '../../helpers/event.generator';
import DateNavigationComponent, {
  DayDateNavigationComponent,
} from './date.navigation';
import EventContainer from './event.container';
import DayViewContainer from './day.container';
import EventDetailsModal from './event.details.modal';
import React, {useState} from 'react';

interface IStudyScreenProps {
  handleChangeWeek: (value: string) => void;
  selectedWeeklyEvent: IWeeklyEvent | null;
  selectedDailyEvent: IDailyEvent | null;
  onEventSelect: (id: string) => void;
  onHandleChangeDay: (id: string) => void;
  selectedTab: string;
  onChangeTab: (tab: string) => void;
}

const StudyScreen = (props: IStudyScreenProps) => {
  const {
    selectedWeeklyEvent,
    handleChangeWeek,
    selectedDailyEvent,
    onEventSelect,
    onHandleChangeDay,
    selectedTab,
    onChangeTab,
  } = props;

  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

  const eventSelectionHandler = (id: string) => {
    onEventSelect(id);
  };

  const onSelectEvent = (id: string) => {
    if (!showEventDetails) {
      const event = selectedDailyEvent?.events.find(event => event.id === id);
      setSelectedEvent(event!);
      setShowEventDetails(!showEventDetails);
    }
  };

  const selectedView = (tab: string) => {
    switch (tab) {
      case 'schedule':
        return (
          <EventContainer
            selectedWeeklyEvent={selectedWeeklyEvent}
            onEventSelect={(id: string) => eventSelectionHandler(id)}
          />
        );
      case 'readinglist':
        return <View />;
      case 'day':
        return (
          <DayViewContainer
            selectedDailyEvent={selectedDailyEvent}
            selectEvent={id => onSelectEvent(id)}
          />
        );
    }
  };

  return (
    <View style={styles.screenContainer}>
      <TopNavigation
        selectedTab={selectedTab}
        setSelectedTab={value => onChangeTab(value)}
      />
      {selectedTab === 'day' ? (
        <DayDateNavigationComponent
          selectedDailyEvent={selectedDailyEvent}
          handleChangeDay={(id: string) => onHandleChangeDay(id)}
        />
      ) : (
        <DateNavigationComponent
          handleChangeWeek={handleChangeWeek}
          selectedWeeklyEvent={selectedWeeklyEvent}
        />
      )}

      {selectedView(selectedTab)}
      <EventDetailsModal
        show={showEventDetails}
        onHandleClose={() => setShowEventDetails(!showEventDetails)}
        event={selectedEvent}
      />
    </View>
  );
};

export default StudyScreen;
