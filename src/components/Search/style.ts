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
    flex: 1,
    marginVertical: '5%',
  },
  searchTextBar: {
    width: '80%',
    height: 40,
    backgroundColor: '#d7f3e257',
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
    backgroundColor: '#00000033',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  //@ts-ignore
  searchItemContainer: (index: number) => ({
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: index % 2 === 0 ? '#31d67457' : null,
    minHeight: 70,
    alignContent: 'center',
    alignItems: 'center',
  }),
  searchItemInsideContainer: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  searchItemTitleText: {
    color: 'white',
    width: '25%',
  },
  scrollViewContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
    height: '100%',
  },
});

export default styles;
