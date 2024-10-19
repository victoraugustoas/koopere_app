import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components/Button';
import {SizedBox} from '../../components/SizedBox';
import {Assets} from '../../utils/assets';
import {Spacer} from '../../components/Spacer';

interface CameraPermissionProps {
  onPermissionRequested: () => void;
}

export function CameraPermission(props: CameraPermissionProps) {
  return (
    <View style={styles.container}>
      <Spacer />
      {/* <Logo /> */}
      <Text style={styles.title}>Acesso à camera</Text>
      <LottieView
        style={styles.animation}
        source={Assets.cameraAnimation}
        autoPlay
        loop
      />
      <SizedBox height={40} />
      <Text style={styles.description}>
        Você deve conceder permissões para acessar a câmera
      </Text>
      <SizedBox height={20} />
      <Button
        label="Garantir permissões"
        onPressed={props.onPermissionRequested}
      />
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
  animation: {
    height: 250,
    width: 250,
  },
  title: {
    fontSize: 28,
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
  },
});
