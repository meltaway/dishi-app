import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabsNavigator from './BottomTabsNavigator';

import {HomeNavigator} from './tabs';
import {RecipeNavigator} from './recipes';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const isAppNavigationShown = true;

  return (
    <>
      <AppStack.Navigator initialRouteName="AuthNavigator">
        {isAppNavigationShown && (
          <>
            <AppStack.Screen
              name="BottomTabsNavigator"
              component={BottomTabsNavigator}
              options={{headerShown: false}}
            />

            {/* START INTERNAL BOTTOM TAB NAVIGATORS */}
            <AppStack.Screen
              name="HomeNavigator"
              component={HomeNavigator}
              options={{headerShown: false}}
            />
            {/* END INTERNAL BOTTOM TAB NAVIGATORS */}
            <AppStack.Screen
              name="RecipeNavigator"
              component={RecipeNavigator}
              options={{headerShown: false}}
            />
          </>
        )}
      </AppStack.Navigator>
    </>
  );
};

export default AppNavigator;
