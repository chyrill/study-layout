import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
  },
  topBarContainer: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  topNavigationButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topNavigationSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export const getTopNavigationSelectionButtonContainerStyle = (
  isSelected: boolean,
  isLeft: boolean,
): ViewStyle | ImageStyle | TextStyle => {
  const result: ViewStyle | ImageStyle | TextStyle = {
    width: 100,
    alignItems: 'center',
    backgroundColor: isSelected ? 'white' : 'transparent',
    padding: 10,
    height: '100%',
  };

  if (isLeft) {
    result.borderTopLeftRadius = 10;
    result.borderBottomLeftRadius = 10;
  } else {
    result.borderTopRightRadius = 10;
    result.borderBottomRightRadius = 10;
  }

  return result;
};

export const getTopNavigationSelectionTextSelectedStyle = (
  isSelected: boolean,
): TextStyle => ({color: isSelected ? '#008001' : 'white'});

export default styles;
