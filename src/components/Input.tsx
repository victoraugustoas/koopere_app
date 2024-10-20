import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {SizedBox} from './SizedBox';

interface InputProps extends TextInputProps {
  label: string;
}

export function Input(props: InputProps) {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <SizedBox height={8} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
});
