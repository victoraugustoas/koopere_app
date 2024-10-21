import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Button} from '../components/Button';
import {SizedBox} from '../components/SizedBox';
import {Spacer} from '../components/Spacer';
import {RootStackParamList} from '../global/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MetadataReaderView'>;

function InfoRow({title, value}: {title: string; value: string}) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowTitle}>{title}</Text>
      <Text style={styles.rowInfo}>{value}</Text>
    </View>
  );
}

export function MetadataReaderView({route, navigation}: Props) {
  const qrCodeDTO = route.params;

  async function getButtonAction() {
    const canOpen = await Linking.canOpenURL(qrCodeDTO.value);
    if (canOpen) {
      Linking.openURL(qrCodeDTO.value);
    }
  }

  return (
    <View style={styles.container}>
      <Spacer />
      <QRCode size={200} value={qrCodeDTO.value} />
      <SizedBox height={20} />
      <InfoRow title={'Nome:'} value={qrCodeDTO.name} />
      <SizedBox height={20} />
      <InfoRow title={'Criado em:'} value={qrCodeDTO.createdAt.toString()} />
      <SizedBox height={20} />
      <InfoRow title={'Valor:'} value={qrCodeDTO.value} />
      <SizedBox height={40} />
      <View style={styles.button}>
        <Button label="Abrir QR Code" onPressed={getButtonAction} />
      </View>
      <Spacer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  rowTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-MediumItalic',
  },
  rowInfo: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  button: {
    width: 200,
  },
});
