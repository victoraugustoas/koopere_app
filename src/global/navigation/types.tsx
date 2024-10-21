import {GrantPermissionViewProps} from '../../screens/GrantPermission/GrantPermissionView';
import {NoPermissionViewProps} from '../../screens/NoPermissionView';

export type RootStackParamList = {
  GrantPermissionView: GrantPermissionViewProps;
  Home: undefined;
  CameraView: undefined;
  NoPermissionView: NoPermissionViewProps;
  MetadataReaderView: {metadata: string};
  MetadataRegistrationView: {value?: string};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
