// auth0-config.js
const auth0Config = {
  domain: 'YOUR_AUTH0_DOMAIN', //change this to your Auth0 domain
  clientId: 'YOUR_AUTH0_CLIENT_ID', //change this to your Auth0 client id
  redirectUri: window.location.origin,
  audience: 'YOUR_AUTH0_AUDIENCE', //change this to your Auth0 audience for your API
  scope: 'read:current_user update:current_user_metadata',
};

export default auth0Config;
