import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {SizedBox} from '../components/SizedBox';
import {RootStackParamList} from '../global/navigation/types';
import {useInitializer} from '../hooks/useInitializer';
import {Assets} from '../utils/assets';
type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreenView'>;

export function SplashScreenView({navigation}: Props) {
  const loading = useInitializer();

  useEffect(() => {
    if (!loading) {
      navigation.replace('Home');
    }
  }, [loading, navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Image source={Assets.logo} />

        {true ? (
          <View>
            <SizedBox height={14} />
            <ActivityIndicator size={50} />
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
