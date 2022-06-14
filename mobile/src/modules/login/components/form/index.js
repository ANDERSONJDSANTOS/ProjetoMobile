import TextInput from '../../../../components/text-input/index';
import DontHaveAnAccount from '../dont-have-an-account/index';

import Button from '../../../../components/button/index';
import { View } from 'react-native';

import { useState } from 'react';

const Form = ({ navigation }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const goToHomePage = () => navigation.navigate('Home')

  return (
    <View style={{ marginTop:30 }}>
      <TextInput
        autoComplete='email'
        icon='envelope'
        maxLength={ 100 }
        onChangeText={ setEmail }
        placeholder='Email'
        value={ email }
      />
      <TextInput
        customStyles={{ marginTop:15, marginBottom:15 }}
        icon='lock'
        maxLength={ 50 }
        onChangeText={ setPassword }
        placeholder='Senha'
        secure={ true }
        value={ password }
      />
      <Button
        content='Entrar'
        onPress={ goToHomePage }
      />
      <DontHaveAnAccount navigation={ navigation }/>
    </View>
  )
}

export default Form