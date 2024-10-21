import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Button} from '../components/Button';
import {Input} from '../components/Input';
import {SizedBox} from '../components/SizedBox';
import {Spacer} from '../components/Spacer';
import {MetadataQrCodeDTO} from '../model/metadata_qrcode';

export function MetadataRegistrationView() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const showQr = Boolean(name != '' && value != '');

  return (
    <View style={styles.container}>
      <Input
        label="Nome do QR Code"
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Digite um nome para o QR Code"
      />
      <SizedBox height={20} />
      <Input
        label="Valor"
        value={value}
        onChangeText={text => setValue(text)}
        placeholder="Digite o conteúdo do QR Code"
      />
      <SizedBox height={20} />
      <View style={styles.qrCode}>
        {showQr ? (
          <QRCode
            size={200}
            value={new MetadataQrCodeDTO(new Date(), name, value).toString()}
          />
        ) : (
          <></>
        )}
      </View>
      {showQr ? (
        <>
          <Spacer />
          <Button label="Cadastrar QR Code" onPressed={() => {}} />
          <Spacer />
        </>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  qrCode: {
    flex: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
  },
});