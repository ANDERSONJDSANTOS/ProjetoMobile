import TextInput from '../../../../components/text-input/index';

import Button from '../../../../components/button/index';
import { View } from 'react-native';

import { useState } from 'react';

const Form = ({ navigation }) => {
  const [ url, setUrl ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ password, setPassword ] = useState('');
  const goToHomePage = () => navigation.navigate('Home')
//url, nome, senha
  return (
    <View style={{ marginTop:30, padding:20 }}>
      <TextInput
        icon='unlink'
        maxLength={ 100 }
        onChangeText={ setUrl }
        placeholder='Url'
        value={ url }
      />
      <TextInput
        customStyles={{ marginTop:15, marginBottom:15 }}
        icon='user'
        maxLength={ 30 }
        onChangeText={ setNome }
        placeholder='Nome'
        value={ nome }
      />
      <TextInput
        customStyles={{ marginBottom:15 }}
        icon='lock'
        maxLength={ 50 }
        onChangeText={ setPassword }
        placeholder='Senha'
        secure={ true }
        value={ password }
      />
      <Button
        content='Cadastrar'
        onPress={ goToHomePage }
      />
    </View>
  )
}

export default Form