import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Button} from '../components/Button';
import {Input} from '../components/Input';
import {SelectInput} from '../components/Select';
import {SizedBox} from '../components/SizedBox';
import {Spacer} from '../components/Spacer';
import {QrCodeType} from '../model/metadata_qrcode';

export function MetadataRegistrationView() {
  const [type, setType] = useState<QrCodeType>('text');
  const [authorName, setAuthorName] = useState('');
  const [value, setValue] = useState('');

  function getPlaceholderValue() {
    switch (type) {
      case 'email':
        return 'Digite o email';
      case 'text':
        return 'Digite um texto';
      case 'url':
        return 'Digite uma url';
      case 'phone':
        return 'Digite um número de telefone';
    }
  }

  const showQr = Boolean(authorName && type && value);

  return (
    <View style={styles.container}>
      <Input
        label="Nome do autor"
        value={authorName}
        onChangeText={text => setAuthorName(text)}
        placeholder="Digite seu nome"
      />
      <SizedBox height={20} />
      <SelectInput<QrCodeType>
        items={[
          {label: 'email', value: 'email', key: 'email'},
          {label: 'Telefone', value: 'phone', key: 'phone'},
          {label: 'Texto', value: 'text', key: 'text'},
          {label: 'URL', value: 'url', key: 'url'},
        ]}
        onValueChange={(option, _) => setType(option)}
        itemKey={type}
        value={type}
        placeholder={{label: 'Selecione um tipo de QR Code'}}
        label="Tipo do QR Code"
      />
      <SizedBox height={20} />
      <Input
        label="Valor"
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={getPlaceholderValue()}
      />
      <SizedBox height={20} />
      <View style={styles.qrCode}>
        {showQr ? (
          <QRCode
            size={200}
            value={JSON.stringify({
              createdAt: new Date(),
              authorName: authorName,
              type: type,
              value: value,
            })}
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
