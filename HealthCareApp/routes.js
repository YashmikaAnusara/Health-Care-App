import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Pages/splash';
import Login from './Pages/login';
import Registration from './Pages/registration';
import SignupQuestion from './Pages/signup_question';
import Navpage from './Pages/navpage';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        />
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />
        <Stack.Screen
          name="Registration"
          options={{headerShown: false}}
          component={Registration}
        />
        <Stack.Screen
          name="signupQuestion"
          options={{headerShown: false}}
          component={SignupQuestion}
        />
        <Stack.Screen
          name="Nav"
          options={{headerShown: false}}
          component={Navpage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;