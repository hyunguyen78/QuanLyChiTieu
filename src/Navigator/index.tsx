import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './Bottom-Tab';
import {SCREEN_NAME} from '@/Constant/Navigator';
const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREEN_NAME.BOTTOM_TAB} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
