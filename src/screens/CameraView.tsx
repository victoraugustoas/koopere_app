import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {Button} from '../components/Button';
import {RootStackParamList} from '../global/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CameraView'>;

export function CameraView({navigation}: Props) {
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 1920, height: 1080}},
  ]);
  const {hasPermission} = useCameraPermission();
  const [code, setCode] = useState<Code>({
    type: 'qr',
    corners: [],
    frame: {height: 0, width: 0, x: 0, y: 0},
  });

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: async codes => {
      if (codes.length === 0) {
        return;
      }
      const first = codes.at(0)!;
      setCode(first);
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

  const x =
    code != null && code.frame != null
      ? code.frame.x - code.frame.width / 2
      : 0;
  const y =
    code != null && code.frame != null
      ? code.frame.y + code.frame.height / 2
      : 0;

  return (
    <View style={styles.container}>
      <Camera
        style={[StyleSheet.absoluteFill, styles.camera]}
        device={device}
        isActive
        codeScanner={codeScanner}
        format={format}
      />

      <View style={[styles.containerQr, {left: x, top: y}]}>
        <View
          style={[
            styles.qrMark,
            {
              height: code?.frame?.height,
              width: code?.frame?.width,
            },
          ]}
        />
        <View>
          <Button
            label={code?.value ?? ''}
            onPressed={async () => {
              try {
                await Linking.openURL(code?.value ?? '');
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </View>
      </View>
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
