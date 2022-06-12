import Logo from '../../components/logo/index';
import LoginForm from './components/form';

import { View } from 'react-native';

const LoginModule = () => {
  return (
    <View style={ containerStyle }>
      <Logo/>
      <LoginForm/>
      
    </View>
  );
}

const containerStyle = {
  flex:1,
  justifyContent:'center',
  padding:20
}

export default LoginModule