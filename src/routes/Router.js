import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from '../pages/Home';

const Router = () => {
    return (
        <Navigator headerMode={{ headerShown: true }}>
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}

export default Router;