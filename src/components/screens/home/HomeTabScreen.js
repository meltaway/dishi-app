import React from 'react';
import styled, {css} from 'styled-components/native';
import {Platform} from 'react-native';

import {Header} from './../../molecules';
import {Flex, Typography} from './../../atoms';

const StyledView = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
  `}
`;

const ParamsContainer = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    ${Platform.select({
      ios: 'box-shadow: 0 2px 4px rgba(133, 147, 161, 0.5)',
      android: 'elevation: 3',
    })};
  `}
`;

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
      <ParamsContainer>
        <Flex>
          <Typography size="lg">Search</Typography>
        </Flex>
      </ParamsContainer>
    </>
  );
};

export default HomeTabScreen;
