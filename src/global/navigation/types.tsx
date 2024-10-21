import {QrCodeDTO} from '../../model/dtos/qrcode';
import {GrantPermissionViewProps} from '../../screens/GrantPermission/GrantPermissionView';
import {NoPermissionViewProps} from '../../screens/NoPermissionView';

export type RootStackParamList = {
  GrantPermissionView: GrantPermissionViewProps;
  Home: undefined;
  CameraView: undefined;
  NoPermissionView: NoPermissionViewProps;
  MetadataReaderView: QrCodeDTO;
  MetadataRegistrationView: {value?: string};
  ListQrCodes: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
