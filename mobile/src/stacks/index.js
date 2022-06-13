import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/index';

import SignUp from '../screens/sign-up/index';
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
        component={ SignUp }
        name='Cadastre-se'
      />
    </Stack.Navigator>
  )
}

export default Screens;