import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigator} from '.';
import {isReadyRef, navigationRef} from './RootNavigation';

const RootNavigator = () => {
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
