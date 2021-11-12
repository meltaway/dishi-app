import {css} from 'styled-components';

const flex = ({grow = 1, shrink = 1, basis = 'auto'}) =>
  css`
    flex: ${grow} ${shrink} ${basis};
  `;

const flexDisplay = ({display}) => {
  switch (display) {
    case 'block':
      return css`
        display: block;
      `;
    case 'inline-flex':
      return css`
        display: inline-flex;
      `;
    default:
      return css`
        display: flex;
      `;
  }
};

const flexDirection = ({column, columnReverse, inherit, row, rowReverse}) => {
  switch (true) {
    case inherit:
      return css`
        flex-direction: inherit;
      `;
    case column:
      return css`
        flex-direction: column;
      `;
    case columnReverse:
      return css`
        flex-direction: column-reverse;
      `;
    case row:
      return css`
        flex-direction: row;
      `;
    case rowReverse:
      return css`
        flex-direction: row-reverse;
      `;
    default:
      return null;
  }
};

const flexWrap = ({
  noWrap,
  wrapFlex, // wrap is a reserved attribute
  wrapReverse,
}) => {
  switch (true) {
    case noWrap:
      return css`
        flex-wrap: nowrap;
      `;
    case wrapFlex:
      return css`
        flex-wrap: wrap;
      `;
    case wrapReverse:
      return css`
        flex-wrap: wrap-reverse;
      `;
    default:
      return css`
        flex-wrap: nowrap;
      `;
  }
};

const alignContent = ({
  contentBetween,
  contentAround,
  contentCenter,
  contentEnd,
  contentStart,
  contentStretch,
}) => {
  switch (true) {
    case contentBetween:
      return css`
        align-content: space-between;
      `;
    case contentAround:
      return css`
        align-content: space-around;
      `;
    case contentCenter:
      return css`
        align-content: center;
      `;
    case contentEnd:
      return css`
        align-content: flex-end;
      `;
    case contentStart:
      return css`
        align-content: flex-start;
      `;
    case contentStretch:
      return css`
        align-content: stretch;
      `;
    default:
      return null;
  }
};

const alignItems = ({
  itemsBaseline,
  itemsCenter,
  itemsEnd,
  itemsStart,
  itemsStretch,
}) => {
  switch (true) {
    case itemsBaseline:
      return css`
        align-items: baseline;
      `;
    case itemsCenter:
      return css`
        align-items: center;
      `;
    case itemsEnd:
      return css`
        align-items: flex-end;
      `;
    case itemsStart:
      return css`
        align-items: flex-start;
      `;
    case itemsStretch:
      return css`
        align-items: stretch;
      `;
    default:
      return null;
  }
};

const alignSelf = ({
  selfBaseline,
  selfCenter,
  selfEnd,
  selfStart,
  selfStretch,
}) => {
  switch (true) {
    case selfBaseline:
      return css`
        align-self: baseline;
      `;
    case selfCenter:
      return css`
        align-self: center;
      `;
    case selfEnd:
      return css`
        align-self: flex-end;
      `;
    case selfStart:
      return css`
        align-self: flex-start;
      `;
    case selfStretch:
      return css`
        align-self: stretch;
      `;
    default:
      return null;
  }
};

const justifyContent = ({
  justifyAround,
  justifyBetween,
  justifyCenter,
  justifyEnd,
  justifyEvenly,
  justifyStart,
}) => {
  switch (true) {
    case justifyAround:
      return css`
        justify-content: space-around;
      `;
    case justifyBetween:
      return css`
        justify-content: space-between;
      `;
    case justifyCenter:
      return css`
        justify-content: center;
      `;
    case justifyEnd:
      return css`
        justify-content: flex-end;
      `;
    case justifyEvenly:
      return css`
        justify-content: space-evenly;
      `;
    case justifyStart:
      return css`
        justify-content: flex-start;
      `;
    default:
      return null;
  }
};

export {
  flex,
  flexDisplay,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  alignSelf,
  justifyContent,
};
