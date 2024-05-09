import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    paddingRight: 10,
  },
  contentContainer: {
    minHeight: '100%', // Ensures the container takes at least the height of the screen
  },
  timeColumn: {
    paddingTop: 20,
    width: 80,
  },
  timeText: {
    color: 'white',
    padding: 10,
    fontSize: 16,
    height: 60, // Setting a fixed height for each time slot
  },
  mainEventArea: {
    flex: 1,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fakeContent: {
    width: '10%',
  },
  contentArea: {
    flexDirection: 'row',
    flex: 1,
  },
  mainScrollArea: {
    flex: 1,
    paddingLeft: 20,
  },
  dayTextContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  dayText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
  },
  eventContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: '100%',
    width: '100%',
    marginTop: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  eventTitleText: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});

export default styles;
