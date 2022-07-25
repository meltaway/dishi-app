import React, {useEffect} from 'react';
import styled, {css} from 'styled-components/native';
import {Platform, ScrollView, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {Header, RecipeCard} from './../../molecules';
import {Flex, Typography, Tag, Button} from './../../atoms';

import {STORE_NAMES} from './../../../constants';

import {getRecipesList} from './../../../store';

import Delete from './../../../assets/icons/Delete.svg';
import Add from './../../../assets/icons/Add.svg';

const ParamsContainer = styled(Flex)`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    ${Platform.select({
      ios: 'box-shadow: 0 2px 4px rgba(133, 147, 161, 0.5)',
      android: 'elevation: 3',
    })};
  `}
`;

const renderTag = text => (
  <>
    <Typography size="md" marginLeft="xxs" marginRight="xxs">
      {text}
    </Typography>
    <Delete />
  </>
);

const HomeTabScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {recipes, isPending} = useSelector(store => store[STORE_NAMES.RECIPES]);

  useEffect(() => {
    dispatch(getRecipesList({data: {q: 'chicken'}}));
  }, [dispatch]);

  const handleNavigateIngredientSelectScreen = () => {
    navigation.navigate('HomeNavigator', {
      screen: 'IngredientSelectScreen',
    });
  };

  return (
    <>
      <Header.HomeHeader>
        <Flex itemsCenter justifyCenter>
          <Typography white bold size="xl4">
            dishi
          </Typography>
        </Flex>
      </Header.HomeHeader>
      <ParamsContainer
        grow={0}
        paddingX="xl3"
        paddingBottom="xl3"
        paddingTop="xl4"
      />
      <Flex grow={0} paddingX="xl3" paddingTop="xl4">
        <ScrollView showsVerticalScrollIndicator={false}>
          {isPending ? (
            <ActivityIndicator color="#1B3726" />
          ) : (
            recipes?.hits?.map(item => (
              <RecipeCard
                recipe={item.recipe}
                linkToRecipe={item._links.self.href}
              />
            ))
          )}
        </ScrollView>
      </Flex>
    </>
  );
};

export default HomeTabScreen;
