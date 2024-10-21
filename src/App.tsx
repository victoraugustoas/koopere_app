/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import 'reflect-metadata';
import {RootStackParamList} from './global/navigation/types';
import {useInitializer} from './hooks/useInitializer';
import {CameraView} from './screens/CameraView';
import {GrantPermissionView} from './screens/GrantPermission/GrantPermissionView';
import {HomeView} from './screens/HomeView';
import {ListQrCodes} from './screens/ListQrCodesView';
import {MetadataReaderView} from './screens/MetadataReaderView';
import {MetadataRegistrationView} from './screens/MetadataRegistrationView';
import {NoPermissionView} from './screens/NoPermissionView';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const loadingInitializer = useInitializer();
  return (
    <NavigationContainer>
      {loadingInitializer ? (
        // TODO refactor this to splash screen
        <ActivityIndicator size="large" />
      ) : (
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeView} />
          <RootStack.Screen name="CameraView" component={CameraView} />
          <RootStack.Screen
            name="MetadataReaderView"
            component={MetadataReaderView}
          />
          <RootStack.Screen name="ListQrCodes" component={ListQrCodes} />
          <RootStack.Screen
            name="MetadataRegistrationView"
            component={MetadataRegistrationView}
          />
          <RootStack.Screen
            name="NoPermissionView"
            options={{headerShown: false}}
            component={NoPermissionView}
          />
          <RootStack.Screen
            name="GrantPermissionView"
            options={{headerShown: false}}
            component={GrantPermissionView}
          />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
