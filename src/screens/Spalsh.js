import { ActivityIndicator, Image, View, Alert } from 'react-native';
import styles from './SplashStyle';
import * as Device from 'expo-device';
import React, { useEffect, useState } from 'react';

const Splash = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const MAX_LOGO = require('../../assets/maxlife_lite.png');

  useEffect(() => {
    const checkDeviceRooted = async () => {
      try {
        setTimeout(async () => {
          const isRooted = await Device.isRootedExperimentalAsync();
          console.log('isRooted', isRooted);
          if (!isRooted) {
            navigation.navigate('Home');
          } else {
            Alert.alert('Device is Rooted!', 'Please use a non-rooted device.');
          }
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.error('Error checking for rooted device:', error);
        navigation.navigate('Home');
        setIsLoading(false);
      }
    };

    checkDeviceRooted();
  }, [navigation]);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <Image source={MAX_LOGO} style={{ width: 75, height: 75 }} />
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  return null;
};

export default Splash;
