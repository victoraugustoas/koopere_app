import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {RootStackParamList} from '../global/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CameraView'>;

export function CameraView({navigation}: Props) {
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 1920, height: 1080}},
  ]);
  const {hasPermission} = useCameraPermission();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: async codes => {
      if (codes.length === 0) {
        return;
      }
      const first = codes.at(0)!;
      if (first.value) {
        navigation.navigate('MetadataReaderView', {metadata: first.value});
      }
    },
  });

  if (!hasPermission) {
    navigation.navigate('GrantPermissionView', {permissionType: 'camera'});
    return;
  }
  if (device == null) {
    navigation.navigate('NoPermissionView', {permissionType: 'camera'});
    return;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={[StyleSheet.absoluteFill, styles.camera]}
        device={device}
        isActive
        codeScanner={codeScanner}
        format={format}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  camera: {flex: 1},
  containerQr: {
    position: 'absolute',
    zIndex: 9999,
  },
  qrMark: {
    borderColor: 'red',
    borderStyle: 'dashed',
    borderWidth: 2,
  },
});
