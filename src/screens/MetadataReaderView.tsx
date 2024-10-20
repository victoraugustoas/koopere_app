import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/Button';
import {SizedBox} from '../components/SizedBox';
import {Spacer} from '../components/Spacer';
import {RootStackParamList} from '../global/navigation/types';
import {MetadataQrCodeDTO} from '../model/metadata_qrcode';

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
  const {metadata: metadaString} = route.params;
  const metadata = MetadataQrCodeDTO.fromString(metadaString);

  async function getButtonAction() {
    const canOpen = await Linking.canOpenURL(metadata.value);
    if (canOpen) {
      Linking.openURL(metadata.value);
    }
  }

  return (
    <View style={styles.container}>
      <Spacer />
      <InfoRow title={'Nome:'} value={metadata.name} />
      <SizedBox height={20} />
      <InfoRow title={'Criado em:'} value={metadata.createdAt.toString()} />
      <SizedBox height={20} />
      <InfoRow title={'Valor:'} value={metadata.value} />
      <SizedBox height={40} />
      <View style={styles.button}>
        <Button label="Abrir QR Code" onPressed={getButtonAction} />
        <Button
          label="Salvar QR Code"
          onPressed={() => {
            navigation.navigate('MetadataRegistrationView', {
              value: metadata.value,
            });
          }}
        />
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
