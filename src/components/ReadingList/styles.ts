import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  header: {
    padding: 20,
    position: 'fixed',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  subHeaderText: {
    paddingVertical: 15,
    fontSize: 14,
    fontWeight: '900',
    color: 'white',
  },
  myReadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  myReadingText: {
    color: 'black',
    fontSize: 18,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
    paddingTop: 5,
  },
  readingStatus: {
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#FF9800',
    padding: 15,
    alignItems: 'center',
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
