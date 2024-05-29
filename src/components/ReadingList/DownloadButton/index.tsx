import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

const DownloadButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Downloading...')}>
        {/* <Icon name="cloud-download" color="#fff" size={20} /> */}
        <Text style={styles.text}>Download all documents</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DownloadButton;
