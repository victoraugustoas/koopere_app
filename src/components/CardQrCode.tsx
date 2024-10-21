import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Feather';
import {SizedBox} from './SizedBox';

interface CardQrCodeProps {
  onPressed: () => void;
  name: string;
  value: string;
}

export function CardQrCode(props: CardQrCodeProps) {
  return (
    <TouchableOpacity onPress={props.onPressed} style={styles.container}>
      <View>
        <Text style={styles.title}>{props.name}</Text>
        <SizedBox height={8} />
        <Text style={styles.value}>{props.value}</Text>
        <SizedBox height={20} />
        <Icon name="arrow-right-circle" size={28} />
      </View>
      <QRCode size={120} value={props.value} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  value: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
});
