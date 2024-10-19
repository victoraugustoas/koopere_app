import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {RootStackParamList} from '../global/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Camera'>;

export function CameraView({navigation}: Props) {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  if (!hasPermission) {
    navigation.navigate('GrantPermissionView', {permissionType: 'camera'});
    return;
  }

  if (device == null) {
    navigation.navigate('NoPermissionView', {permissionType: 'camera'});
    return;
  }

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}
