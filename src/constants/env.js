// TODO: store this valeus in secured .env-like way via react-native config or react-native-dotenv

const GOOGLE_OAUTH_APP_ID = '';

const GOOGLE_OAUTH_CLIENT_ID = `${GOOGLE_OAUTH_APP_ID}.apps.googleusercontent.com`;

const GOOGLE_OAUTH_ISSUER = 'https://accounts.google.com';

const GOOGLE_OAUTH_REDIRECT_URL = `com.googleusercontent.apps.${GOOGLE_OAUTH_APP_ID}:/oauth2redirect/google`;

const FB_OAUTH_CLIENT_ID = '142036271414038';

const FB_OAUTH_ISSUER = 'https://graph.facebook.com/oauth/authorize';

const FB_OAUTH_REDIRECT_URL = `fb${FB_OAUTH_CLIENT_ID}://authorize`;

export {
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_ISSUER,
  GOOGLE_OAUTH_REDIRECT_URL,
  FB_OAUTH_CLIENT_ID,
  FB_OAUTH_ISSUER,
  FB_OAUTH_REDIRECT_URL,
};
