import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InformationInput = ({
  labelValue,
  placeholderText,
  iconType,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <Text>{iconType}</Text>
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default InformationInput;
