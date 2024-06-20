//create layout component that detect the screen size if mobile or tablet size
//then render the appropriate component

import React from 'react';
import {View, Text, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {useEffect} from 'react';
import MobileLayout from './mobile/layout';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({children}: ILayout) => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      const {width} = Dimensions.get('window');
      if (width >= 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    const subscription = Dimensions.addEventListener(
      'change',
      updateDeviceType,
    );
    updateDeviceType();
    return () => {
      subscription.remove();
    };
  });

  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', bottom: 'never'}}>
      {/* <View style={styles.topContainer} /> */}
      {isMobile ? <MobileLayout /> : <Text style={styles.text}>Tablet</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Layout;
