import { AuthProvider, Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import axios from "axios";


import { Login } from "pages/Login";
import "@pankod/refine-antd/dist/styles.min.css";

import {
    notificationProvider,
    Layout,
    ErrorComponent,
} from "@pankod/refine-antd";

 


import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";

import { useAuth } from "react-oidc-context";
import { Loading } from "components/Loading";
 


function App() {

    const { isLoading, error, isAuthenticated, activeNavigator, user, removeUser, signinRedirect, signoutRedirect} = useAuth();



    switch (activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }
    if (isLoading) {
        return (
            <Loading />
        )
    }
    if (error) {
        return <span>Oops... {error.message}</span>;
    }

  
 

    const authProvider: AuthProvider = {
        login: () => {
            return Promise.resolve();
        },
        logout: () => {
            signoutRedirect();
            return Promise.resolve("/");
        },
        checkError: () => Promise.resolve(),
        checkAuth: () => {
            if (isAuthenticated) {
                const token = user?.access_token;

                axios.defaults.headers.common = {
                    Authorization: `Bearer ${token}`,
                };

                return Promise.resolve ();
            }

            return Promise.reject();
        },
        getPermissions: () => Promise.resolve(),
        getUserIdentity: async () => {
            if (user) {
                return Promise.resolve({
                    name: user.profile.name?user.profile.name:user.profile['cognito:username'],
                    avatar: user.profile.avatar,
                    ...user

                });
            }
        },
    };



  return (
    <Refine
      routerProvider={routerProvider}
      LoginPage={Login}
      authProvider={authProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev",axios)}
      resources={[
        {
            name: "posts",
            list: PostList,
            create: PostCreate,
            edit: PostEdit,
            show: PostShow,
        },
    ]}

    notificationProvider={notificationProvider}
    Layout={Layout}
    catchAll={<ErrorComponent />}
    />
  );
}

export default App;
 
