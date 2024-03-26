import { NavigationContainer } from '@react-navigation/native';
import { View, Text, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './views/SignUp';
import Login from './views/Login';
import BottomTabNav from './navigation/BottomTabNav';

const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='SignUp' 
            component={SignUp} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name='BottomTabNav' 
            component={BottomTabNav} 
            options={{headerShown: false}} 
          />

          <Stack.Screen 
            name='Home' 
            component={Home} 
            options={{headerShown: false}} 
          />
          
          <Stack.Screen 
            name='Login' 
            component={Login} 
            options={{headerShown: false}} 
          />

        </Stack.Navigator>
      
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
