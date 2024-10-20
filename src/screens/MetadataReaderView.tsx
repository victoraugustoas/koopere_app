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

export function MetadataReaderView({route}: Props) {
  const {metadata: metadaString} = route.params;
  const metadata = MetadataQrCodeDTO.fromString(metadaString);

  function getButtonLabel() {
    switch (metadata.type) {
      case 'email':
        return 'Enviar email';
      case 'text':
        return 'Enviar email';
      case 'url':
        return 'Acessar website';
      case 'phone':
        return 'Discar número';
    }
  }

  function getButtonAction(): () => Promise<void> {
    switch (metadata.type) {
      case 'email':
        return async () => {
          return Linking.openURL(`mailto:${metadata.value}`);
        };
      case 'text':
        return async () => {
          if (await Linking.canOpenURL(`${metadata.value}`)) {
            return Linking.openURL(`${metadata.value}`);
          }
        };
      case 'url':
        return async () => {
          return Linking.openURL(`${metadata.value}`);
        };
      case 'phone':
        return async () => {
          return Linking.openURL(`tel:${metadata.value}`);
        };
    }
  }

  return (
    <View style={styles.container}>
      <Spacer />
      <InfoRow title={'Autor:'} value={metadata.authorName} />
      <SizedBox height={20} />
      <InfoRow title={'Criado em:'} value={metadata.createdAt.toString()} />
      <SizedBox height={20} />
      <InfoRow title={'Tipo:'} value={metadata.type} />
      <SizedBox height={20} />
      <InfoRow title={'Valor:'} value={metadata.value} />
      <SizedBox height={40} />
      <View style={styles.button}>
        <Button label={getButtonLabel()} onPressed={getButtonAction()} />
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
