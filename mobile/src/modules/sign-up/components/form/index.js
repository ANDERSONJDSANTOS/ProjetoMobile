import TextInput from '../../../../components/text-input/index';
import Button from '../../../../components/button/index';

import { View } from 'react-native';
import { useState } from 'react';

const Form = () => {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <View>
      <TextInput
        autoComplete='email'
        icon='envelope'
        maxLength={ 100 }
        onChangeText={ setEmail }
        placeholder='Email'
        value={ email }
      />
      <TextInput
        autoComplete='name'
        customStyles={{ marginTop:15 }}
        icon='user'
        maxLength={ 30 }
        onChangeText={ setName }
        placeholder='Nome'
        value={ name }
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
        content='Criar'
      />    
    </View>
  )
}

export default Form