/* eslint-disable no-shadow */
import {css} from 'styled-components';

const margin = ({margin, theme}) => {
  if (!margin) {
    return null;
  }

  return css`
    margin: ${theme.spacing[margin] || margin};
  `;
};

const marginX = ({marginX, theme}) => {
  if (!marginX) {
    return null;
  }

  return css`
    margin-left: ${theme.spacing[marginX] || marginX};
    margin-right: ${theme.spacing[marginX] || marginX};
  `;
};

const marginY = ({marginY, theme}) => {
  if (!marginY) {
    return null;
  }

  return css`
    margin-top: ${theme.spacing[marginY] || marginY};
    margin-bottom: ${theme.spacing[marginY] || marginY};
  `;
};

const marginTop = ({marginTop, theme}) => {
  if (!marginTop) {
    return null;
  }

  return css`
    margin-top: ${theme.spacing[marginTop] || marginTop};
  `;
};

const marginRight = ({marginRight, theme}) => {
  if (!marginRight) {
    return null;
  }

  return css`
    margin-right: ${theme.spacing[marginRight] || marginRight};
  `;
};

const marginBottom = ({marginBottom, theme}) => {
  if (!marginBottom) {
    return null;
  }

  return css`
    margin-bottom: ${theme.spacing[marginBottom] || marginBottom};
  `;
};

const marginLeft = ({marginLeft, theme}) => {
  if (!marginLeft) {
    return null;
  }

  return css`
    margin-left: ${theme.spacing[marginLeft] || marginLeft};
  `;
};

export default {
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
};
