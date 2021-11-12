import 'react-native-gesture-handler';

import React from 'react';
import {Text, TextInput} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components';
import {RootNavigator} from './src/navigation';
// import {store, persistor} from '@store/config';

import theme from './src/styles/theme';

// import './src/utils/i18n';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
