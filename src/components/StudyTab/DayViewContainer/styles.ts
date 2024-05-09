import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    alignItems: 'center',
    marginHorizontal: 20,
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
    width: 800,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  profileContainer: {
    flexDirection: 'row',
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
    color: '#555',
  },
  eventDescription: {
    fontSize: 16,
    color: '#666',
  },
  documents: {
    marginTop: 20,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  documentText: {
    fontSize: 16,
    color: '#888',
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
});

export default styles;
