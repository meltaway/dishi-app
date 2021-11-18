import React from 'react';
import styled, {css} from 'styled-components/native';
import {Platform} from 'react-native';

import {Header, RecipeCard} from './../../molecules';
import {Flex, Typography, Tag, Button} from './../../atoms';
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

const HomeTabScreen = () => {
  return (
    <>
      <Header.HomeHeader>
        <Flex itemsCenter justifyCenter>
          <Typography white bold size="xl3">
            dishi
          </Typography>
        </Flex>
      </Header.HomeHeader>
      <ParamsContainer
        grow={0}
        paddingX="xl3"
        paddingBottom="xl3"
        paddingTop="xl4">
        <Flex grow={0}>
          <Typography marginBottom="md" size="lg">
            Ingredients
          </Typography>
          <Flex row grow={0}>
            <Tag.List tags={ingredients} renderItem={renderTag} grow={0} />
            <Button.Container>
              <Add />
            </Button.Container>
          </Flex>
        </Flex>
        <Flex marginTop="sm" grow={0}>
          <Typography marginBottom="md" size="lg">
            Dish properties
          </Typography>
          <Flex row grow={0}>
            <Tag.List tags={properties} renderItem={renderTag} grow={0} />
            <Button.Container>
              <Add />
            </Button.Container>
          </Flex>
        </Flex>
      </ParamsContainer>
      <Flex grow={0} paddingX="xl3" paddingBottom="xl3" paddingTop="xl4">
        <RecipeCard title="Musaengchae" properties={properties} rating={4.8} />
      </Flex>
    </>
  );
};

export default HomeTabScreen;
