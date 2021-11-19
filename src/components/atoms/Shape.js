import styled, {css} from 'styled-components/native';

const Line = styled.View`
  ${({theme, width, color}) => css`
    background-color: ${color || theme.colors.mercury};
    height: 1px;
    width: ${width || '100%'};
  `}
`;

const BoldLine = styled.View`
  ${({theme, width, color}) => css`
    background-color: ${color || theme.colors.royalBlue};
    height: 2px;
    width: ${width || '100%'};
  `}
`;

const Separator = styled.View`
  ${({theme, height, color, marginTop}) => css`
    background-color: ${theme.colors[color] || theme.colors.mystic};
    width: 1px;
    height: ${height || '100%'};
    ${marginTop && `margin-top: ${marginTop}`}
  `}
`;

const Triangle = styled.View`
  ${({theme, color, rotate, scale = 0.6, height}) => css`
    background-color: transparent;
    border-style: solid;
    width: 0;
    height: 0;
    border-left-width: ${height || '20px'};
    border-left-color: transparent;
    border-right-width: ${height || '20px'};
    border-right-color: transparent;
    border-bottom-width: ${height || '20px'};
    border-bottom-color: ${theme.colors[color]};
    transform: rotate(${rotate || '90deg'}) scaleY(${scale});
    margin-left: 5px;
  `}
`;

const Circle = styled.View`
  ${({theme, color, size}) => css`
    background-color: ${theme.colors[color]};
    ${size &&
    `
    height: ${theme.spacing[size]};
    width: ${theme.spacing[size]};`}
    border-radius: 50;
  `}
`;

const Rectangle = styled.View`
  ${({theme, width, height, color}) => css`
    background-color: ${theme.colors[color] || theme.colors.mysticLight};
    height: ${height || '8px'};
    width: ${width || '100%'};
  `}
`;

const Shape = {
  Line,
  BoldLine,
  Separator,
  Triangle,
  Circle,
  Rectangle,
};

export default Shape;
