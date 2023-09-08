/**
 * @format
 */
import '@azure/core-asynciterator-polyfill'
import React, { Suspense } from 'react';
import { AppRegistry } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import App from './App';
import { name as appName } from './app.json';

import { enableLatestRenderer } from 'react-native-maps';

import { Amplify, Auth } from 'aws-amplify';
import awsmobile from './src/aws-exports';

import AppProvider from './src/contexts/AppContext';
import config from './tamagui.config';

Amplify.configure(awsmobile);
Auth.configure(awsmobile);

enableLatestRenderer();

function Main(props) {
    return <TamaguiProvider config={config} defaultTheme='light'>
        <AppProvider>
            <Suspense>
                <App {...props} />
            </Suspense>
        </AppProvider>
    </TamaguiProvider>
}

AppRegistry.registerComponent(appName, () => Main);
