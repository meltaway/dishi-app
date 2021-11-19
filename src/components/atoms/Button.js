import styled, {css} from 'styled-components';
import {bool, oneOf} from 'prop-types';

import {marginMixin, paddingMixin} from './../../styles/mixins';

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

const Primary = styled.TouchableOpacity`
  ${({disabled, theme, type, width}) => css`
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
    ${width
      ? ` width: ${width}; `
      : `width: ${type === 'fullWidth' ? 100 : 47}%;`}
    border-radius: 6px;
    border: none;
    background: ${disabled ? theme.colors.perano : theme.colors.royalBlue};
  `}
`;

Primary.propTypes = {
  disabled: bool,
  type: oneOf(['fullWidth', 'halfWidth']),
};

const Secondary = styled.TouchableOpacity`
  ${({theme, type, width}) => css`
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
    
    ${width
      ? ` width: ${width}; `
      : `width: ${type === 'fullWidth' ? 100 : 47}%;`}
    border-radius: 6px;
    border: 1px solid ${theme.colors.grey};
    background: white;
  `}
`;

Secondary.propTypes = {
  type: oneOf(['fullWidth', 'halfWidth']),
};

const Large = styled.TouchableOpacity`
  ${({theme, backgroundImage}) => css`
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
    
    border-radius: 9px;
    height: 188px;
    background: black;
  `}
`;

const Container = styled.TouchableOpacity`
  ${({theme, width, height}) => css`
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
  `}
`;

const Onboarding = styled.TouchableOpacity`
  ${({theme, isTransparent, height}) => css`
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
    
    border-radius: 9px;
    border: 1px solid ${isTransparent ? theme.colors.grey : '#F0F6FF'};
    height: ${height};
    background: ${isTransparent ? 'transparent' : '#F0F6FF'};
  `}
`;

const Button = {
  Primary,
  Secondary,
  Container,
  Large,
  Onboarding,
};
export default Button;
