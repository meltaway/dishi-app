import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled, {css} from 'styled-components/native';
import {Platform} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Flex, Typography, Button} from './../atoms';
import Star from './../../assets/icons/Star.svg';

const CardContainer = styled(Flex)`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    ${Platform.select({
      ios: 'box-shadow: 0 2px 4px rgba(133, 147, 161, 0.5)',
      android: 'elevation: 3',
    })};
    border-radius: 25;
  `}
`;

const styles = {
  image: {
    height: 146,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
};

const RecipeCard = ({recipe, linkToRecipe}) => {
  const navigation = useNavigation();

  const [rating] = useState((Math.random() * (5.0 - 3.0) + 3.0).toFixed(1));

  const handleNavigateToOneRecipeScreen = () => {
    navigation.navigate('RecipeNavigator', {
      screen: 'OneRecipeScreen',
      params: {
        title: recipe.label,
        rating,
        id: linkToRecipe.match(/(?<=\/)[a-zA-Z0-9]{32}(?=\?)/g),
      },
    });
  };

  return (
    <Button.Container
      marginBottom="xl4"
      onPress={handleNavigateToOneRecipeScreen}>
      <CardContainer grow={0}>
        <FastImage
          style={styles.image}
          source={{
            uri: recipe.image,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Flex row grow={0} justifyBetween>
          <Flex column grow={0} paddingX="xl2" paddingY="lg">
            <Typography size="lg" numberOfLines={1}>
              {recipe.label}
            </Typography>
            <Typography size="sm" regentGrey marginTop="xxs">
              {recipe.cuisineType[0].replace(/(^\w{1})|(\s+\w{1})/g, letter =>
                letter.toUpperCase(),
              )}{' '}
              ({recipe.dishType[0]})
            </Typography>
          </Flex>
          <Flex row grow={0} paddingTop="lg" paddingRight="xl2">
            <Star />
            <Typography size="md" marginLeft="xxs">
              {rating}
            </Typography>
          </Flex>
        </Flex>
      </CardContainer>
    </Button.Container>
  );
};

export default RecipeCard;
