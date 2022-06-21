import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInput from '../../../../components/text-input/index';

import DontHaveAnAccount from '../dont-have-an-account/index';
import Button from '../../../../components/button/index';

import Error from '../../../../components/error/index';
import Api from '../../../../externals/api';

import { View } from 'react-native';
import { useState } from 'react';

const Form = ({ navigation }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const api = new Api();
  const goToHomePage = () => navigation.navigate('Home');

  async function login() {
    try {
      const res = await api.login(email, password);
      const token = res.data.token;

      AsyncStorage.setItem('token', token);
      
      setError('');
      goToHomePage();
    }
    catch(err) {
      setError(err.response.data);
    }
  }

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
        onPress={ login }
      />
      <Error 
        error={ error }
        style={{ marginTop:10 }}  
      />
      <DontHaveAnAccount navigation={ navigation }/>
    </View>
  )
}

export default Form