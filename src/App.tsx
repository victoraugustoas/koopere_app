/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import 'reflect-metadata';
import {RootStackParamList} from './global/navigation/types';
import {CameraView} from './screens/CameraView';
import {GrantPermissionView} from './screens/GrantPermission/GrantPermissionView';
import {HomeView} from './screens/HomeView';
import {ListQrCodes} from './screens/ListQrCodesView';
import {MetadataReaderView} from './screens/MetadataReaderView';
import {MetadataRegistrationView} from './screens/MetadataRegistrationView';
import {NoPermissionView} from './screens/NoPermissionView';
import {SplashScreenView} from './screens/SplashScreenView';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SplashScreenView">
        <RootStack.Screen
          name="SplashScreenView"
          options={{headerShown: false}}
          component={SplashScreenView}
        />
        <RootStack.Screen name="Home" component={HomeView} />
        <RootStack.Screen
          name="CameraView"
          component={CameraView}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="MetadataReaderView"
          options={{headerTitle: 'Dados do QR Code'}}
          component={MetadataReaderView}
        />
        <RootStack.Screen
          name="ListQrCodes"
          options={{headerTitle: 'Lista de QR Codes'}}
          component={ListQrCodes}
        />
        <RootStack.Screen
          name="MetadataRegistrationView"
          options={{headerTitle: 'Criar um QR Code'}}
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
    </NavigationContainer>
  );
}

export default App;
