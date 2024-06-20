import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  peoplePageContainer: {
    flex: 1,
  },
  peoplePageNavigationContainer: {
    borderBottomWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  peoplePageNavigationItemContainer: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  peoplePageNavigationLeftIcon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  peoplePageNavigationCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  peoplePageNavaigationRightIcon: {
    flexDirection: 'row',
  },
  peoplePageNavigationButtonSelectedLeft: {
    backgroundColor: 'white',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // alignContent: 'center',
  },
  peoplePageNavigationButtonSelectedRight: {
    backgroundColor: 'white',
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    // alignContent: 'center',
  },
  peoplePageNavigationButtonSelectedCenter: {
    backgroundColor: 'white',
    height: '100%',
    // alignContent: 'center',
  },
  peoplePageNavigationUnselectedText: {
    color: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  peoplePageNavigationSelectedText: {
    color: 'green',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  peopleItemCardImageBackgorund: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
