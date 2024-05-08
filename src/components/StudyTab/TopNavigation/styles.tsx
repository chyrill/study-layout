import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    backgroundColor: '#4CAF50',
    top: 0, // Customize the background color to match your theme
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  segmentedControl: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
  },
  segmentSelected: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    color: 'white',
  },
  segmentButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  segmentTextSelected: {
    fontSize: 16,
    color: '#4CAF50',
  },
  segmentText: {
    fontSize: 16,
    color: 'white',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
});

export default styles;
