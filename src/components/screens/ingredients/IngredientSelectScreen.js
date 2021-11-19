import React, {useState, useMemo} from 'react';
import styled, {css} from 'styled-components/native';
import {ScrollView} from 'react-native';

import {Header, ViewSwitch} from '../../molecules';
import {Flex, Typography, Tag, Button, Shape} from '../../atoms';
import * as ingredients from './../../../utils/ingredients.json';

const ParamsContainer = styled(Flex)`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
  `}
`;

const IngredientSelectScreen = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleViewChange = () => {
    setActiveTabIndex(activeTabIndex === 0 ? 1 : 0);
  };

  const ListItem = ({name}) => {
    const [isChosen, setIsChosen] = useState(false);

    const handlePress = () => {
      setIsChosen(prevState => !prevState);
    };

    return (
      <Button.Container paddingY="xs" onPress={handlePress}>
        <Typography seaGreen={isChosen}>{name}</Typography>
      </Button.Container>
    );
  };

  const IngredientList = useMemo(
    () =>
      ingredients.list.map(item => {
        if (item.letter !== 'default') {
          return (
            <Flex>
              <Typography marginY="sm" size="xl4" marginLeft="xl3">
                {item.letter}
              </Typography>
              <Shape.Line />
              <Flex marginLeft="xl66" paddingTop="lg">
                {item.values.map(value => (
                  <ListItem name={value.name} />
                ))}
              </Flex>
            </Flex>
          );
        }
      }),
    [],
  );

  const headerSign = (
    <Flex itemsCenter justifyCenter>
      <Typography white bold size="xl2">
        Ingredients
      </Typography>
    </Flex>
  );

  return (
    <>
      <Header.WithReturnAndSign headerSign={headerSign} />
      <ParamsContainer paddingX="xl3" paddingY="xl3">
        <Flex marginBottom="md">
          <ViewSwitch
            firstTabTitle="List"
            secondTabTitle="Sorting"
            activeTab={activeTabIndex}
            viewChangeAction={handleViewChange}
          />
        </Flex>
        <ScrollView>{IngredientList}</ScrollView>
      </ParamsContainer>
    </>
  );
};

export default IngredientSelectScreen;
