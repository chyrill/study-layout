import {View} from 'react-native';
import TopNavigation from './top.navigation';
import styles from './style';

const StudyScreen = () => {
  const [selectedTab, setSelectedTab] = useState<string>('schedule');

  return (
    <View style={styles.screenContainer}>
      <TopNavigation />
    </View>
  );
};

export default StudyScreen;
