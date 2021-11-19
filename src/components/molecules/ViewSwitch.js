import React from 'react';
import styled, {css} from 'styled-components/native';
import {Platform} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Flex, Typography, Button} from './../atoms';
import Star from './../../assets/icons/Star.svg';

const SwitchContainer = styled(Flex)`
  ${({theme}) => css`
    background-color: ${theme.colors.wildSand};
    border: 1px solid ${theme.colors.mercury};
    border-radius: 20px;
    height: 46px;
  `}
`;

const SwitchItem = styled(Flex)`
  ${({theme, isActive}) => css`
    flex: 2;
    background-color: ${isActive ? theme.colors.white : theme.colors.wildSand};
    border-radius: 20px;
    height: 40px;
  `}
`;

const ViewSwitch = ({
  firstTabTitle,
  secondTabTitle,
  activeTab,
  viewChangeAction,
}) => {
  return (
    <SwitchContainer grow={0} row>
      <SwitchItem grow={0} isActive={activeTab === 0} itemsCenter justifyCenter>
        <Button.Container onPress={viewChangeAction}>
          <Typography
            seaGreen={activeTab === 0}
            mercury={activeTab !== 0}
            size="xl">
            {firstTabTitle}
          </Typography>
        </Button.Container>
      </SwitchItem>
      <SwitchItem grow={0} isActive={activeTab === 1} itemsCenter justifyCenter>
        <Button.Container onPress={viewChangeAction}>
          <Typography
            seaGreen={activeTab === 1}
            mercury={activeTab !== 1}
            size="xl">
            {secondTabTitle}
          </Typography>
        </Button.Container>
      </SwitchItem>
    </SwitchContainer>
  );
};

export default ViewSwitch;
