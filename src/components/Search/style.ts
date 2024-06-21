import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  mainContainer: {
    height: '90%',
    backgroundColor: '#069658',
    borderRadius: 20,
  },
  searchTextBar: {
    width: '80%',
    height: 40,
    backgroundColor: '#d3ded9',
    borderRadius: 20,
    margin: 5,
    flexDirection: 'row',
  },
  modalTopContainer: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTopContainerDivider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
});

export default styles;
