import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    width: 800,
  },
  header: {
    backgroundColor: '#a4c49a',
    padding: 10,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  eventDetails: {
    alignItems: 'center',
    width: '100%', // Make it responsive and full width of its parent
    marginTop: 20,
    padding: 10, // Add padding if needed
  },
  profileContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventTime: {
    fontSize: 18,
    color: 'green',
  },
  eventDescription: {
    paddingTop: 20,
    flexWrap: 'wrap',
    width: '80%',
    fontSize: 16,
    flexShrink: 1,
    color: '#666',
  },
  documents: {
    width: '95%', // Set width to 95% of eventDetails
    alignSelf: 'center', // Center it horizontally within eventDetails
    backgroundColor: 'white',
  },
  documentTitle: {
    padding: 20,
    backgroundColor: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  documentText: {
    fontSize: 16,
    color: 'black',
  },
  noteButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    marginTop: 20,
  },
  noteButtonText: {
    fontSize: 16,
    color: '#000',
  },
  footer: {
    padding: 10,
    backgroundColor: '#a4c49a',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: 'white',
  },
  eventDetailProfileContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventDetailProfileContainerName: {
    flexWrap: 'wrap',
    paddingTop: 10,
    fontSize: 15,
    color: 'green',
  },
  documentContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
  },
  eventInformation: {
    paddingRight: 10,
    paddingTop: 25,
    width: '100%',
  },
});

export default styles;
