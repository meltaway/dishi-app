import styled, {css} from 'styled-components';
import {string} from 'prop-types';
import {marginMixin, paddingMixin, fontMixin} from './../../styles/mixins';

const {
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
} = marginMixin;

const {
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
} = paddingMixin;

const {color, fontSize, lineHeight, fontWeight} = fontMixin;

const Typography = styled.Text`
  ${({align, transform, width, height}) => css`
    ${margin}
    ${marginTop}
    ${marginRight}
    ${marginBottom}
    ${marginLeft}
    ${marginX}
    ${marginY}

    ${padding}
    ${paddingTop}
    ${paddingRight}
    ${paddingBottom}
    ${paddingLeft}
    ${paddingX}
    ${paddingY}
    
    ${lineHeight}
    ${color}
    ${fontSize}
    ${fontWeight}

    ${align &&
    `
      text-align: ${align};
    `}
    ${transform &&
    `
        text-transform: ${transform};
      `}
    ${width &&
    `
      width: ${width};
    `}
    ${height &&
    `
      height: ${height};
    `}
  `}
`;

Typography.propTypes = {
  align: string,
};

Typography.defaultProps = {
  align: 'left',
};

export default Typography;
