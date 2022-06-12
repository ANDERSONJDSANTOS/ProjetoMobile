import TextInput from '../../../../components/text-input/index';
import DontHaveAnAccount from '../dont-have-an-account/index';

import Button from '../../../../components/button/index';
import { View } from 'react-native';

import { useState } from 'react';

const Form = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

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
      />
      <DontHaveAnAccount/>
    </View>
  )
}

export default Form