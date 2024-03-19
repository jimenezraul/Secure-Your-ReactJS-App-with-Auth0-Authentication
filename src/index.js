import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import auth0Config from './auth0-config';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    authorizationParams={{
      redirect_uri: auth0Config.redirectUri,
      audience: auth0Config.audience,
      scope: auth0Config.scope,
    }}
  >
    <App />
  </Auth0Provider>
);
