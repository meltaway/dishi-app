/* eslint-disable no-shadow */
import {css} from 'styled-components';

const padding = ({padding, theme}) => {
  if (!padding) {
    return null;
  }

  return css`
    padding: ${theme.spacing[padding] || padding};
  `;
};

const paddingX = ({paddingX, theme}) => {
  if (!paddingX) {
    return null;
  }

  return css`
    padding-left: ${theme.spacing[paddingX] || paddingX};
    padding-right: ${theme.spacing[paddingX] || paddingX};
  `;
};

const paddingY = ({paddingY, theme}) => {
  if (!paddingY) {
    return null;
  }

  return css`
    padding-top: ${theme.spacing[paddingY] || paddingY};
    padding-bottom: ${theme.spacing[paddingY] || paddingY};
  `;
};

const paddingTop = ({paddingTop, theme}) => {
  if (!paddingTop) {
    return null;
  }

  return css`
    padding-top: ${theme.spacing[paddingTop] || paddingTop};
  `;
};

const paddingRight = ({paddingRight, theme}) => {
  if (!paddingRight) {
    return null;
  }

  return css`
    padding-right: ${theme.spacing[paddingRight] || paddingRight};
  `;
};

const paddingBottom = ({paddingBottom, theme}) => {
  if (!paddingBottom) {
    return null;
  }

  return css`
    padding-bottom: ${theme.spacing[paddingBottom] || paddingBottom};
  `;
};

const paddingLeft = ({paddingLeft, theme}) => {
  if (!paddingLeft) {
    return null;
  }

  return css`
    padding-left: ${theme.spacing[paddingLeft] || paddingLeft};
  `;
};

export default {
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
};
