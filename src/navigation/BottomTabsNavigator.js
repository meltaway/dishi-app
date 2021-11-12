import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeTabScreen} from './../components/screens/home';

import HomeTabIcon from './../assets/images/HomeTabIcon.svg';
import HomeTabIconFocused from './../assets/images/HomeTabIconFocused.svg';

const BOTTOM_TAB_ICON_SIZE = 30;

const DEFAULT_ICON_PROPS = {
  width: BOTTOM_TAB_ICON_SIZE,
  height: BOTTOM_TAB_ICON_SIZE,
};

const DEFAULT_TAB_BAR_OPTIONS = Platform.select({
  ios: null,
  android: {
    tabBarOptions: {
      tabStyle: {
        height: 45,
        marginTop: 6,
      },
      style: {
        height: 60,
      },
    },
  },
});

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <>
      <HomeTabIcon />
      {/* START NAVIGATOR */}
      <BottomTabs.Navigator
        {...DEFAULT_TAB_BAR_OPTIONS}
        initialRouteName="HomeTabScreen">
        <BottomTabs.Screen
          name="HomeTabScreen"
          component={HomeTabScreen}
          options={{
            tabBarLabel: ({}) => <></>,
            tabBarIcon: ({focused}) =>
              focused ? (
                <HomeTabIconFocused {...DEFAULT_ICON_PROPS} />
              ) : (
                <HomeTabIcon {...DEFAULT_ICON_PROPS} />
              ),
          }}
        />
      </BottomTabs.Navigator>
      {/* END NAVIGATOR */}
    </>
  );
};

export default BottomTabsNavigator;
