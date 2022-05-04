# Refine Auth Provider for OIDC / AWS Cognito  

Refine Framework: https://refine.dev/  

## Available Scripts

### Install dependency

```bash
    npm install
```

### Running the development server.

```bash
    npm run dev
```

### Building for production.

```bash
    npm run build
```

### Running the production server.

```bash
    npm run start
```

## AWS Cognito Setup 
* Go to AWS Console - Cognito
* Create New User Pool
* Create new App Client -> This will create new OIDC Client
* Write down the Client ID and Secret and update configuration in oidcConfig in index.tsx
 ```
   const oidcConfig = {
    authority: "https://cognito-idp.<region>.amazonaws.com/ap-southeast-1_<pool-id>",
    client_id: "<client-id from cognito console>",
    client_secret: "<client-secret from cognito console>",
    redirect_uri: window.location.origin,
    scope: "openid email profile",
    code_challenge_method:"S256",
    code_challenge:"CODE_CHALLENGE"

  };
  ```

## Other OIDC Setup
* Find out the Client ID, Client Secret, and OIDC https end point (The endpoint will be the root domain as in https://root-domain/.well-known/openid-configuration)
* Update Client ID and Secreet configuration in oidcConfig in index.tsx 
 

  


## License

MIT
