import {css} from 'styled-components';

const color = ({
  theme,
  black,
  white,
  regentGrey,
  whiteSmoke,
  darkGreen,
  green,
  lightGreen,
  darkBrown,
  brown,
  lightBrown,
  darkSalmon,
  salmon,
  lightSalmon,
  fireBush,
  seaGreen,
  pewter,
  red,
  aquaForest,
  mercury,
  wildSand,
}) => {
  switch (true) {
    case black:
      return css`
        color: ${theme.colors.black};
      `;
    case white:
      return css`
        color: ${theme.colors.white};
      `;
    case regentGrey:
      return css`
        color: ${theme.colors.regentGrey};
      `;
    case aquaForest:
      return css`
        color: ${theme.colors.aquaForest};
      `;
    case red:
      return css`
        color: ${theme.colors.red};
      `;
    default:
      return css`
        color: ${theme.colors.black};
      `;
  }
};

const fontSize = ({size, theme}) => {
  if (theme.typography.size[size]) {
    return css`
      font-size: ${theme.typography.size[size]};
    `;
  }
  return null;
};

const fontWeight = ({light, regular, bold, theme}) => {
  switch (true) {
    case light:
      return css`
        font-weight: ${theme.typography.weight.light};
      `;
    case bold:
      return css`
        font-weight: ${theme.typography.weight.bold};
      `;
    case regular:
      return css`
        font-weight: ${theme.typography.weight.regular};
      `;
    default:
      return css`
        font-weight: ${theme.typography.weight.medium};
      `;
  }
};

// eslint-disable-next-line no-shadow
const lineHeight = ({lineHeight, theme}) => {
  switch (lineHeight) {
    case 'sm':
      return css`
        line-height: ${theme.typography.lineHeight.sm};
      `;
    case 'md':
      return css`
        line-height: ${theme.typography.lineHeight.md};
      `;
    default:
      return null;
  }
};

export default {
  color,
  fontSize,
  fontWeight,
  lineHeight,
};
