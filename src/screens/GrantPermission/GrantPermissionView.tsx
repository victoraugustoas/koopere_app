import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useCameraPermission} from 'react-native-vision-camera';
import {RootStackParamList} from '../../global/navigation/types';
import {CameraPermission} from './CameraPermission';

type Props = NativeStackScreenProps<RootStackParamList, 'GrantPermissionView'>;

export type PermissionType = 'camera';
export interface GrantPermissionViewProps {
  permissionType: PermissionType;
}

export function GrantPermissionView({route, navigation}: Props) {
  const {requestPermission} = useCameraPermission();

  const {permissionType} = route.params;

  function getPermissionCallbackFromPermissionType(type: PermissionType) {
    switch (type) {
      case 'camera':
        return async () => {
          const isPermissionOk = await requestPermission();
          if (isPermissionOk) {
            return navigation.replace('CameraView');
          } else {
            return navigation.replace('NoPermissionView', {
              permissionType: 'camera',
            });
          }
        };
    }
  }

  const callbackPermission =
    getPermissionCallbackFromPermissionType(permissionType);

  switch (permissionType) {
    case 'camera':
      return <CameraPermission onPermissionRequested={callbackPermission} />;
  }
}
