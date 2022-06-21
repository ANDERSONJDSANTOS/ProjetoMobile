import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateCategory from '../screens/create-category/index';

import PasswordScreen from '../screens/password/index';
import SignUpScreen from '../screens/sign-up/index';

import LoginScreen from '../screens/login/index';
import HomeScreen from '../screens/home/index';

import Logo from '../components/logo';


const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor:'black',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    color:'white',
    fontWeight: 'bold',
  },
  headerTitle:() => <Logo customStyles={{ fontSize:18 }}/>
}

function Screens() {
  return (
    <Stack.Navigator screenOptions={ screenOptions }>
      <Stack.Screen 
        component={ LoginScreen } 
        name='Entrar'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ SignUpScreen }
        name='Cadastre-se'
      />
      <Stack.Screen 
        component={ HomeScreen } 
        name='Home'
        options={{ headerBackVisible:false }}
      />
      <Stack.Screen
        component={ CreateCategory }
        name='Criar categoria'
      />
      <Stack.Screen
        component={ PasswordScreen }
        name='Cadastro de senhas'
      />
    </Stack.Navigator>
  );
}

export default Screens;