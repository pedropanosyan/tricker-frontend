import { Provider } from "react-redux";
import { store }  from "../store/store";
import {Slot, Stack} from "expo-router";
import React from "react";
import {ThemeProvider} from "rn-css";
import {theme} from "../styled-components/theme";
import {Auth0Provider} from "react-native-auth0";
import {PortalProvider} from "@gorhom/portal";
import config from "../auth0-config";

export default function RootLayoutNav() {

    return (
        <ThemeProvider theme={theme}>
            <PortalProvider>
                <Provider store={store}>
                    <Auth0Provider domain={config.domain} clientId={config.clientId}>
                        <Slot />
                    </Auth0Provider>
                </Provider>
            </PortalProvider>
        </ThemeProvider>
    );
}

