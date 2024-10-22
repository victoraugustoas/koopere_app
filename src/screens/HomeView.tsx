import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useCameraPermission} from 'react-native-vision-camera';
import {Button} from '../components/Button';
import {SizedBox} from '../components/SizedBox';
import {Spacer} from '../components/Spacer';
import {RootStackParamList} from '../global/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeView({navigation}: Props) {
  const {hasPermission} = useCameraPermission();
  return (
    <View style={styles.container}>
      <Spacer />
      <Button
        label="Ler QR Code"
        onPressed={() => {
          if (!hasPermission) {
            navigation.navigate('GrantPermissionView', {
              permissionType: 'camera',
            });
          } else {
            navigation.navigate('CameraView');
          }
        }}
      />
      <SizedBox height={20} />
      <Button
        label="Listar QR Codes"
        onPressed={() => {
          navigation.navigate('ListQrCodes');
        }}
      />
      <SizedBox height={20} />
      <Button
        label="Cadastrar QR Code"
        onPressed={() => {
          navigation.navigate('MetadataRegistrationView', {});
        }}
      />
      <Spacer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
