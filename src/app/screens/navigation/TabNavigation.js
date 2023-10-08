import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableScreens } from 'react-native-screens';
import SplashScreen from '../splash/SplashScreen';
import OnBoardingScreen from '../onboard/OnBoardingScreen';
import LoginAndSignUpScreen from '../signup-login/LoginAndSignUpScreen';

enableScreens();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
            <Stack.Screen name="LoginAndSignUp" component={LoginAndSignUpScreen} />
           
        </Stack.Navigator>
    )
}
export default TabNavigation