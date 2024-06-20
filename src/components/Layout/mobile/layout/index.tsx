import {SafeAreaView, View} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CircleAvatar from '../../../Avatar';
import {useState} from 'react';

const TopBar = ({clickMenuBotton}: {clickMenuBotton: any}) => {
  return (
    <SafeAreaView style={style.topBarContainer}>
      <View style={style.topBarContentContainer}>
        <Icon.Button
          name="bars"
          size={15}
          color="white"
          backgroundColor="transparent"
          onPress={clickMenuBotton}
        />
        <View style={style.inseadLogoContainer}>
          <CircleAvatar size={60} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const DrawerComponent = () => {
  return (
    <SafeAreaView
      style={{backgroundColor: 'rgba(255,255,255,0.2)', height: '100%'}}>
      <View />
    </SafeAreaView>
  );
};

const MobileLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const onClickMenu = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <SafeAreaView>
      {openDrawer && <DrawerComponent />}
      <TopBar clickMenuBotton={onClickMenu} />
      <View style={{backgroundColor: 'green', height: '100%'}} />
    </SafeAreaView>
  );
};

export default MobileLayout;
