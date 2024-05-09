import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: '5%',
    paddingTop: '2%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textColorWhite: {
    color: 'white',
  },
  dateRange: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
  textDateRange: {
    fontSize: 24,
    color: 'white',
  },
  gmtContainer: {
    position: 'absolute',
    left: 0,
  },
  eventItem: {
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
  },
  eventItemContent: {
    position: 'relative',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minHeight: 200,
  },
  eventDate: {
    fontSize: 14,
    color: '#008000',
    flex: 1,
    flexWrap: 'wrap',
  },
  eventTitle: {
    fontSize: 21,
    color: '#000',
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  eventDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  eventTime: {
    fontSize: 15,
    color: '#008000',
  },
  eventPlatform: {
    fontSize: 15,
    fontWeight: '500',
    color: '#666',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hostContainer: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 100,
    alignItems: 'center',
  },
  hostText: {
    fontSize: 15,
    color: 'green',
    fontWeight: 'bold',
    paddingRight: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default styles;
