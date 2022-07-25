import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Linking, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {Header} from '../../molecules';
import {Flex, Typography, Button} from '../../atoms';

import {STORE_NAMES} from '../../../constants';

import {getRecipe} from '../../../store';

const ImageOverlay = styled(Flex)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const styles = {
  image: {
    height: 200,
  },
};

// halal: pork-free, alcohol-free
// kosher: kosher

const OneRecipeScreen = () => {
  const {
    params: {id, title, rating},
  } = useRoute();
  const dispatch = useDispatch();

  const {currentRecipe, isRejected} = useSelector(store => ({
    currentRecipe: store[STORE_NAMES.RECIPES].recipesById[id],
    isRejected: store[STORE_NAMES.RECIPES].isRejected,
  }));

  useEffect(() => {
    if (!currentRecipe) {
      dispatch(getRecipe({id}));
    }
  }, [dispatch, id, currentRecipe]);

  const handleRedirectToRecipe = () => {
    Linking.openURL(currentRecipe.recipe.url);
  };

  const headerSign = (
    <Flex itemsCenter justifyCenter paddingTop="xxs">
      <Typography white bold size="xl2">
        Recipe
      </Typography>
    </Flex>
  );

  return (
    <>
      {!currentRecipe ? (
        <>
          {isRejected ? (
            <>
              <Header.ThreeItemsHeader leftIcon="return" />
              <Typography>Not found</Typography>
            </>
          ) : (
            <Flex column marginTop="44px" height="100%" justifyCenter>
              <ActivityIndicator size="large" color="#1B3726" />
            </Flex>
          )}
        </>
      ) : (
        <>
          <Header.WithReturnAndSign headerSign={headerSign} />
          <Flex grow={0}>
            <ImageOverlay itemsCenter justifyCenter>
              <Typography white bold size="xl4">
                {title}
              </Typography>
              <Typography size="md" white bold>
                {currentRecipe.recipe.cuisineType[0].replace(
                  /(^\w{1})|(\s+\w{1})/g,
                  letter => letter.toUpperCase(),
                )}{' '}
                cuisine
              </Typography>
            </ImageOverlay>
            <FastImage
              style={styles.image}
              source={{
                uri: currentRecipe.recipe.image,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <Flex paddingX="xl" paddingTop="xl">
              {currentRecipe.recipe.cautions.length !== 0 && (
                <Typography marginBottom="md" red>
                  Caution(s): {currentRecipe.recipe.cautions.join(', ')}
                </Typography>
              )}
              <Typography marginBottom="md">
                Diet(s): {currentRecipe.recipe.dietLabels.join(', ')}
              </Typography>
              <Typography>
                Health benefits: {currentRecipe.recipe.healthLabels.join(', ')}
              </Typography>

              <Typography size="xl" paddingBottom="sm" marginTop="xl">
                Ingredients
              </Typography>
              {currentRecipe.recipe.ingredientLines.map((line, index) => (
                <Typography key={`${index}-${line}`}>• {line}</Typography>
              ))}

              <Flex itemsCenter>
                <Button.Primary
                  paddingTop="md"
                  paddingBottom="sm"
                  marginTop="xl2"
                  onPress={handleRedirectToRecipe}>
                  <Typography
                    size="xl"
                    white
                    bold
                    align="center"
                    paddingBottom="sm">
                    See full recipe
                  </Typography>
                </Button.Primary>
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
};

export default OneRecipeScreen;
