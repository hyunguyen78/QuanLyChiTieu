import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListScreen from '@/Screens/ListScreen';
import ChartScreen from '@/Screens/ChartScreen';
import AddScreen from '@/Screens/AddScreen';
import BudgetScreen from '@/Screens/BudgetScreen';
import SettingScreen from '@/Screens/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-utils-scale';
import {COLORS} from '@/Themes/Color';
import {SCREEN_NAME} from '@/Constant/Navigator';
import LinearGradient from 'react-native-linear-gradient';
const Tab = createBottomTabNavigator();

const CustomButtonAdd = (props: any) => {
  return (
    <LinearGradient
      colors={[COLORS.PRIMARY, COLORS.PINK_CHALK]}
      style={styles.customButton}>
      <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
        <Ionicons name="add-outline" size={50} color={'white'} />
      </TouchableOpacity>
    </LinearGradient>
  );
};
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GRAY_LIGHT,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 20,
          borderRadius: 50,
          height: scale(65),
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 0.3,
          shadowRadius: 2,
          // android (Android +5.0)
          elevation: 1,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName: any;
          if (route.name === SCREEN_NAME.LIST_SCREEN) {
            iconName = focused ? 'list' : 'list-outline';
          }
          if (route.name === SCREEN_NAME.CHART_SCREEN) {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          }
          if (route.name === SCREEN_NAME.BUDGETSCREEN) {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }
          if (route.name === SCREEN_NAME.SETTINGSCREEN) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={color}
              style={{marginTop: scale(30), height: scale(30)}}
            />
          );
        },
      })}>
      <Tab.Screen name={SCREEN_NAME.LIST_SCREEN} component={ListScreen} />
      <Tab.Screen name={SCREEN_NAME.CHART_SCREEN} component={ChartScreen} />
      <Tab.Screen
        name={SCREEN_NAME.ADD_SCREEN}
        component={AddScreen}
        options={{
          tabBarButton: props => <CustomButtonAdd {...props} />,
        }}
      />
      <Tab.Screen name={SCREEN_NAME.BUDGETSCREEN} component={BudgetScreen} />
      <Tab.Screen name={SCREEN_NAME.SETTINGSCREEN} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: COLORS.PRIMARY,
    width: scale(70),
    height: scale(70),
    borderRadius: 80,
    bottom: scale(30),
    borderWidth: scale(4),
    borderColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
