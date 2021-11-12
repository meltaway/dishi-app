import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeTabScreen} from './../../components/screens/home';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeTabScreen">
      <HomeStack.Screen
        name="HomeTabScreen"
        component={HomeTabScreen}
        options={{headerShown: false}}
      />
      {/* <HomeStack.Screen
        name="IngredientSelectScreen"
        component={IngredientSelectScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="IngredientFilterScreen"
        component={IngredientFilterScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="RecipeFiltersScreen"
        component={RecipeFiltersScreen}
        options={{headerShown: false}}
      /> */}
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
