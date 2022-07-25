import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {OneRecipeScreen} from './../../components/screens/recipes';

const RecipeStack = createStackNavigator();

const RecipeNavigator = () => {
  return (
    <RecipeStack.Navigator initialRouteName="OneRecipeScreen">
      <RecipeStack.Screen
        name="OneRecipeScreen"
        component={OneRecipeScreen}
        options={{headerShown: false}}
      />
    </RecipeStack.Navigator>
  );
};

export default RecipeNavigator;
