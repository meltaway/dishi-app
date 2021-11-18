const colors = {
  // selection
  white: '#FFFFFF',
  // title text
  black: '#001840',
  // main text
  paleSky: '#6A7587',
  // description text
  regentGrey: '#8892A4',
  // showMore
  cadetBlue: '#ACB5C3',
  grey: '#2596BE',
  dustyGrey: '#979797',
  lightGrey: '#C9CFDA',
  midGray: '#636366',
  // line
  mystic: '#E0EAED',
  // search field
  mysticLight: '#E9EDF3',
  // background
  whiteLilac: '#F9FAFD',
  // disabled explore button
  whiteTransparent: 'rgba(255, 255, 255, 0.65)',
  // star
  koromiko: '#FFC560',
  transparent: 'rgba(0, 0, 0, 0)',
  // delete button
  solidRed: '#FF0000',

  // dishi
  whiteSmoke: '#F1F1F1',
  darkGreen: '#1B3726',
  green: '#3C654E',
  lightGreen: '#97C2AA',

  darkBrown: '#8A613B',
  brown: '#986333',
  lightBrown: '#BA895C',

  darkSalmon: '#CD7762',
  salmon: '#F79179',
  lightSalmon: '#FDBAAC',

  fireBush: '#E28936',

  // button
  seaGreen: '#32A363',
  pewter: '#97B2A3',
  // error
  red: '#CF3B3B',
  // focused
  aquaForest: '#66A483',
  // border
  mercury: '#E8E8E8',
};

const theme = {
  colors,
  spacing: {
    auto: 'auto',
    none: '0px',
    xxs: '4px',
    xs: '6px',
    sm: '8px',
    smmd: '10px',
    md: '12px',
    lg: '14px',
    xl: '16px',
    xl2: '18px',
    xl3: '20px',
    xl4: '24px',
    xl5: '32px',
    xl6: '40px',
    xl66: '42px',
    xl7: '48px',
    xl8: '57px',
    xl9: '64px',
    xl10: '72px',
    xl11: '86px',
    xl12: '96px',
  },
  typography: {
    family: {
      montserrat: 'Montserrat',
      roboto: 'Roboto',
    },
    size: {
      xs: '11px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '17px',
      xl2: '18px',
      xl3: '24px',
      xl4: '32px',
      xl5: '48px',
    },
    lineHeight: {
      sm: '22px',
      md: '24px',
    },
    weight: {
      regular: '400',
      medium: '500',
      light: '300',
      bold: '700',
    },
  },
};

export default theme;
