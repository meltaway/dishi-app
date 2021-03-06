// for webstorm to resolve aliases
// eslint-disable-next-line no-undef
System.config({
  paths: {
    '@icons/*': './src/assets/icons/*',
    '@images/*': './src/assets/images/*',

    '@atoms': './src/components/atoms',
    '@molecules': './src/components/molecules',
    '@organisms': './src/components/organisms',
    '@screens/*': './src/components/screens/*',
    '@templates': './src/components/templates',

    '@navigation': './src/navigation',
    '@explore': './src/navigation/explore',
    '@tabs': './src/navigation/tabs',

    '@store': './src/store',

    '@fonts': './src/styles/fonts',
    '@mixins': './src/styles/mixins',
    '@theme': './src/styles/theme',

    '@translations': './src/translations',
    '@utils': './src/utils/*',
    '@constants': './src/constants/*',
    '@hooks': './src/hooks',
    '@methods': './src/methods',
  },
});
