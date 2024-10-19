import {GrantPermissionViewProps} from '../../screens/GrantPermission/GrantPermissionView';
import {NoPermissionViewProps} from '../../screens/NoPermissionView';

export type RootStackParamList = {
  GrantPermissionView: GrantPermissionViewProps;
  Home: undefined;
  Camera: undefined;
  NoPermissionView: NoPermissionViewProps;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
