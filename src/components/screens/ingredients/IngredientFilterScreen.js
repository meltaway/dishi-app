import React from 'react';
import styled, {css} from 'styled-components/native';
import {Platform} from 'react-native';

import {Header, RecipeCard} from '../../molecules';
import {Flex, Typography, Tag, Button} from '../../atoms';
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

const ingredients = ['radish', 'pepper'];
const properties = ['spicy'];

const IngredientFilterScreen = () => {
  return (
    <>
      <Header.HomeHeader>
        <Flex itemsCenter justifyCenter>
          <Typography white bold size="xl3">
            dishi
          </Typography>
        </Flex>
      </Header.HomeHeader>
    </>
  );
};

export default IngredientFilterScreen;
