import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/Button';
import {SizedBox} from '../components/SizedBox';
import {Spacer} from '../components/Spacer';
import {RootStackParamList} from '../global/navigation/types';
import {Assets} from '../utils/assets';
import {PermissionType} from './GrantPermission/GrantPermissionView';

type Props = NativeStackScreenProps<RootStackParamList, 'NoPermissionView'>;

export interface NoPermissionViewProps {
  permissionType: PermissionType;
}

export function NoPermissionView({route, navigation}: Props) {
  let title: string;
  let description: string;

  const {permissionType} = route.params;

  switch (permissionType) {
    case 'camera':
      title = 'A permissão à camera negada';
      description =
        'Não é possível utilizar o leitor de QR code sem acesso à camera';
      break;
  }

  return (
    <View style={styles.container}>
      <Spacer />
      <Text style={styles.title}>{title}</Text>
      <SizedBox height={20} />
      <LottieView
        style={styles.animation}
        source={Assets.alertAnimation}
        autoPlay
        loop
      />
      <SizedBox height={20} />
      <Text style={styles.description}>{description}</Text>
      <SizedBox height={20} />
      <Button
        label="Tentar novamente"
        onPressed={() =>
          navigation.replace('GrantPermissionView', {permissionType: 'camera'})
        }
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
  title: {fontSize: 28, textAlign: 'center'},
  description: {textAlign: 'center', fontSize: 18},
});
