import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraFormat,
  useCodeScanner,
} from 'react-native-vision-camera';
import {Button} from '../components/Button';
import {SizedBox} from '../components/SizedBox';
import {Spacer} from '../components/Spacer';
import {RootStackParamList} from '../global/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CameraView'>;

export function CameraView({navigation}: Props) {
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 1920, height: 1080}},
  ]);
  const [code, setCode] = useState<Code | undefined>(undefined);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: async codes => {
      if (codes.length === 0) {
        return;
      }
      const first = codes.at(0)!;

      if (first.value) {
        clearTimeout(timeoutId);
        setCode(first);
        const timeout = setTimeout(() => {
          setCode(undefined);
        }, 1500);
        setTimeoutId(timeout);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Camera
        style={[StyleSheet.absoluteFill, styles.camera]}
        device={device!}
        isActive
        codeScanner={codeScanner}
        format={format}
      />
      {code && code.value ? (
        <View style={styles.button}>
          <Spacer flex={2} />
          <Button
            label={code.value}
            onPressed={() => {
              Linking.openURL(code!.value!);
            }}
          />
          <SizedBox height={8} />
          <Button
            label="Salvar QR Code"
            onPressed={() => {
              navigation.navigate('MetadataRegistrationView', {
                value: code.value,
              });
            }}
          />
          <Spacer />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {flex: 1, padding: 20, alignItems: 'center'},
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
