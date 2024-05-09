import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

interface ICircularCheckbox {
  size: number;
  isChecked: boolean;
  onToggle: any;
}

const CircularCheckbox = ({size, isChecked, onToggle}: ICircularCheckbox) => {
  return (
    <TouchableOpacity onPress={onToggle} style={{margin: 10}}>
      <View
        style={[
          styles.outerCircle,
          {width: size, height: size, borderRadius: size / 2},
        ]}>
        {isChecked && (
          <View
            style={[
              styles.innerCircle,
              {width: size * 0.6, height: size * 0.6, borderRadius: size * 0.3},
            ]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4CAF50', // Green border color
    backgroundColor: '#FFF', // White background
  },
  innerCircle: {
    backgroundColor: '#4CAF50', // Green inner circle
  },
});

export default CircularCheckbox;
