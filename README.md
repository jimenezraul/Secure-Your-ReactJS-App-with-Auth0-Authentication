# Secure Your ReactJS App with Auth0 Authentication

## Clone the repository

by https
```bash
git clone https://github.com/jimenezraul/Secure-Your-ReactJS-App-with-Auth0-Authentication.git
```
by ssh
```bash
git clone git@github.com:jimenezraul/Secure-Your-ReactJS-App-with-Auth0-Authentication.git
```
or download the zip file.

## Install the dependencies

```bash
cd Secure-Your-ReactJS-App-with-Auth0-Authentication
npm install
```

## Create an Auth0 Application

1. Go to the [Auth0 Dashboard](https://manage.auth0.com/dashboard) and click on the "Create Application" button.
2. Name your new app and select "Single Page Web Applications".
3. Click on the "Create" button.
4. Go to the "Settings" tab and add `http://localhost:3000` to the "Allowed Callback URLs", "Allowed Web Origins", and "Allowed Logout URLs" fields.
5. Click on the "Save Changes" button.
6. Go to the "Quick Start" tab and select "React" and get the domain and client ID.

## Edit auth_config.js File

1. Go to the `src` folder and edit file called `auth_config.js`. Replace the `domain` and `clientId` with the ones you got from the Auth0 Dashboard.

## Run the Application

```bash
npm start
```

## Author
Raul Jimenez

## Blog Post
[Secure Your ReactJS App with Auth0 Authentication](https://raulwebdev.com/secure-your-reactjs-app-with-auth0-authentication/)

