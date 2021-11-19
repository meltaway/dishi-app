import {css} from 'styled-components';

const color = ({
  black,
  white,
  grey,
  royalBlue,
  lightGrey,
  paleSky,
  red,
  whiteTransparent,
  regentGrey,
  mystic,
  cadetBlue,
  mountainMeadow,
  seaGreen,
  mercury,
  theme,
}) => {
  switch (true) {
    case black:
      return css`
        color: ${theme.colors.black};
      `;
    case white:
      return css`
        color: ${theme.colors.whiteSmoke};
      `;
    case grey:
      return css`
        color: ${theme.colors.grey};
      `;
    case mystic:
      return css`
        color: ${theme.colors.mystic};
      `;
    case paleSky:
      return css`
        color: ${theme.colors.paleSky};
      `;
    case royalBlue:
      return css`
        color: ${theme.colors.royalBlue};
      `;
    case red:
      return css`
        color: ${theme.colors.red};
      `;
    case whiteTransparent:
      return css`
        color: ${theme.colors.whiteTransparent};
      `;
    case regentGrey:
      return css`
        color: ${theme.colors.regentGrey};
      `;
    case lightGrey:
      return css`
        color: ${theme.colors.lightGrey};
      `;
    case cadetBlue:
      return css`
        color: ${theme.colors.cadetBlue};
      `;
    case mountainMeadow:
      return css`
        color: ${theme.colors.mountainMeadow};
      `;
    case seaGreen:
      return css`
        color: ${theme.colors.seaGreen};
      `;
    case mercury:
      return css`
        color: ${theme.colors.mercury};
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
