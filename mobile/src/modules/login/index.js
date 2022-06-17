import LoginForm from './components/form/index';
import Logo from '../../components/logo/index';

import { View } from 'react-native';

const LoginModule = ({ navigation }) => {
  return (
    <View style={ containerStyle }>
      <Logo customStyles={{ textAlign:'center', fontSize:40 }}/>
      <LoginForm navigation={ navigation }/>
    </View>
  );
}

const containerStyle = {
  flex:1,
  justifyContent:'center',
  padding:20
}

export default LoginModule;