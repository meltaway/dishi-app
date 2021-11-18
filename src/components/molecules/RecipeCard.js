import React from 'react';
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

const RecipeCard = ({title, properties, rating}) => {
  const generatePropertiesString = () => {
    const str = properties.join(', ');
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <Button.Container>
      <CardContainer grow={0}>
        <FastImage
          style={styles.image}
          source={{
            uri:
              'https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC6886.jpg',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Flex column paddingX="xl2" paddingY="lg">
          <Typography size="lg">{title}</Typography>
          <Flex marginTop="xs" row justifyBetween>
            <Typography size="lg" regentGrey numberOfLines={1}>
              {generatePropertiesString()}
            </Typography>
            <Flex row grow={0} itemsCenter>
              <Typography marginRight="xxs" size="lg">
                {rating}
              </Typography>
              <Star />
            </Flex>
          </Flex>
        </Flex>
      </CardContainer>
    </Button.Container>
  );
};

export default RecipeCard;
