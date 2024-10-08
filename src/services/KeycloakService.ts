import Keycloak from "keycloak-js";

const keycloakInstance = new Keycloak();

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const Login = (onAuthenticatedCallback: Function) => {
  keycloakInstance
    .init({
      onLoad: "login-required",
      pkceMethod: 'S256'
    })
    .then(function (authenticated) {
      authenticated ? onAuthenticatedCallback() : alert("non authenticated");
    })
    .catch((e) => {
      console.dir(e);
      console.log(`keycloak init exception: ${e}`);
    });
};


const UserName = () => keycloakInstance.tokenParsed?.preferred_username;
const Token = () => keycloakInstance.idToken;

const KeyCloakService = {
  CallLogin: Login,
  GetUserName: UserName,
  Token: Token
};

export default KeyCloakService;