import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface ButtonProps {
  onPressed: () => void;
  label: string;
}

export function Button(props: ButtonProps) {
  return (
    <TouchableHighlight
      underlayColor="white"
      style={styles.touchable}
      onPress={props.onPressed}>
      <View style={[styles.button, styles.touchable]}>
        <Text style={styles.text}>{props.label}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
});
