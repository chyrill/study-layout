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
  modalPeopleMainContainer: {
    flex: 1,
    backgroundColor: '#f3f8f538',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalPeopleMainCard: {
    backgroundColor: '#126735',
    width: 1000,
    height: 800,
    borderRadius: 20,
  },
  modalPeopleMainCardCloseButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  modalPeopleMainCardCloseButtonText: {
    color: 'white',
    fontSize: 20,
  },
  modalPeopleMainCardTopContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 150,
  },
  modalPeopleMainCardTopContentLeftSection: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 50,
  },
  modalPeopleMainCardTopContentLeftSectionText: {
    color: 'white',
    fontSize: 25,
  },
  modalPeopleMainCardTopContentRightSection: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 50,
  },
  modalPeopleMainCardTopContentRightSectionText: {
    color: 'white',
    fontSize: 25,
  },
  modalPeopleMainCardTopContentCenterSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  modalPeopleMainCardBottomContent: {
    zIndex: -1,
    marginTop: -100,
    paddingHorizontal: 50,
    backgroundColor: '#edeeed',
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  modalPeopleMainCardBottomInnerContent: {
    flex: 1,
    paddingTop: 20,
  },
  modalPeopleMainCardBottomInnerContentJobTitle: {
    fontSize: 20,
    color: '#525252',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    paddingLeft: 20,
    width: 200,
  },
  modalPeopleMainCardBottomContentDetails: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  modalPeopleMainCardBottomContentDetailsTitle: {
    fontSize: 20,
    color: '#525252',
    textTransform: 'uppercase',
  },
  modalPeopleMainCardBioContent: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#5252522e',
    flex: 1,
  },
  modalPeopleMainCardContactContent: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#5252522e',
    flex: 1,
    marginVertical: 10,
  },
  modalPeopleMainCardContactContentTitleText: {
    fontSize: 15,
    color: '#525252',
    textTransform: 'uppercase',
  },
  modalPeopleMainCardContactContentValueText: {
    fontSize: 15,
    color: 'black',
    paddingBottom: 20,
    textTransform: 'uppercase',
  },
});

export default styles;
