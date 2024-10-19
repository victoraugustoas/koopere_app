/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './global/navigation/types';
import {CameraView} from './screens/CameraView';
import {GrantPermissionView} from './screens/GrantPermission/GrantPermissionView';
import {HomeView} from './screens/HomeView';
import {NoPermissionView} from './screens/NoPermissionView';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeView} />
        <RootStack.Screen name="Camera" component={CameraView} />
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
