import { StatusBar } from 'expo-status-bar';
import TabNavigation from './src/app/screens/navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
enableScreens();
export default function App() {
  return (
    <NavigationContainer independent={true}  >
         <StatusBar
           animated={true}
           backgroundColor="transparent"
           barStyle={'dark-content'}
           translucent={true}
         />
         <TabNavigation />
    </NavigationContainer>
  );
}

