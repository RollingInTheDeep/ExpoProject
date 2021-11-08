import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

function AddButton({ onPress, screenType }) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={onPress}>
      {screenType == 'public' ? (
        <Text style={styles.text}>공유하기</Text>
      ) : (
        <Text style={styles.text}>저장하기</Text>
      )}
    </TouchableOpacity>
  );
}

export default AddButton;
