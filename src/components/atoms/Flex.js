import {node} from 'prop-types';
import styled, {css} from 'styled-components';
import {flexbox, marginMixin, paddingMixin} from './../../styles/mixins';

const {
  flex,
  flexDisplay,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  alignSelf,
  justifyContent,
} = flexbox;

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

const Flex = styled.View`
  ${({width, height}) => css`
    ${alignContent}
    ${alignItems}
    ${alignSelf}
    ${flex}
    ${flexDirection}
    ${flexDisplay}
    ${flexWrap}
    ${justifyContent}

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

    width: ${width || 'auto'};
    height: ${height || 'auto'};
  `}
`;

Flex.propTypes = {
  children: node,
};

Flex.defaultProps = {
  children: null,
};

export default Flex;
