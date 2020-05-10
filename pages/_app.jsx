import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import store from "../redux/store";
import withRedux from "next-redux-wrapper";
import cookies from "next-cookies";
import "../styles.css";
import UserProvider from "../components/userProvider";
const MyApp = ({ Component, pageProps, store, token }) => {
    MyApp.getInitialProps = async ({ Component, ctx }) => {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        const token = cookies(ctx).token || "";
        console.log("anything");
        //Anything returned here can be access by the client
        return { pageProps, token };
    };

    return (
        <Provider store={store}>
            <UserProvider token={token}>
                <Component {...pageProps} />
            </UserProvider>
        </Provider>
    );
};

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
