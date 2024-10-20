import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';
import {SizedBox} from './SizedBox';

interface SelectInputProps<T> extends PickerSelectProps {
  label: string;
  items: {label: string; value: T; key: string}[];
  onValueChange: (value: T, index: number) => void;
  value: T;
}

export function SelectInput<T>(props: SelectInputProps<T>) {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <SizedBox height={8} />
      <RNPickerSelect {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
});
