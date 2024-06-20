import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {defaultpic} from '../constants/constants';

const CircleAvatar = ({
  source = defaultpic,
  size = 50,
  borderColor = '#fff',
  borderWidth = 2,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: borderWidth,
          borderColor: borderColor,
        },
      ]}>
      <Image
        source={{uri: source}}
        style={{
          width: size - borderWidth * 2,
          height: size - borderWidth * 2,
          borderRadius: (size - borderWidth * 2) / 2,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default CircleAvatar;
