import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {SizedBox} from './SizedBox';

interface ButtonProps {
  onPressed: () => void;
  label: string;
  showLoading?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <TouchableHighlight
      disabled={props.showLoading}
      underlayColor="white"
      style={styles.touchable}
      onPress={props.onPressed}>
      <View
        style={[
          styles.button,
          styles.touchable,
          props.showLoading ? styles.buttonLoading : null,
        ]}>
        <Text style={styles.text}>{props.label}</Text>
        {props.showLoading ? (
          <>
            <SizedBox width={8} />
            <ActivityIndicator size={22} color="white" />
          </>
        ) : (
          <></>
        )}
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
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonLoading: {
    backgroundColor: 'green',
    opacity: 0.7,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
});
