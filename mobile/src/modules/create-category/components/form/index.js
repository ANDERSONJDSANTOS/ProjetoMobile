import TextInput from '../../../../components/text-input/index';
import Button from '../../../../components/button/index';

import colors from '../../../../global/validColors';
import Picker from '../../../../components/picker';

import Error from '../../../../components/error';
import { ScrollView, View } from 'react-native';

import icons from '../../../../global/icons';
import Api from '../../../../externals/api';

import Label from '../label/index';
import { useState } from 'react';

const Form = ({ navigation }) => {
  const [ name, setName ] = useState('');
  const [ selectedIcon, setSelectedIcon ] = useState('');

  const [ selectedColor, setSelectedColor ] = useState('');
  const [ error, setError ] = useState('');

  const api = new Api();

  async function send() {
    try {
      await api.createCategory(name, selectedColor, selectedIcon);
      setError('');
      navigation.goBack();
    }
    catch(err) {
      setError(err.response.data);
    }
  }

  return (
    <ScrollView>
      <View>
        <Label 
          content='Nome da categoria'
          style={{ marginBottom:10 }}
        />
        <TextInput
          autoComplete='name'
          icon='tag'
          maxLenth={ 30 }
          onChangeText={ setName }
          placeholder='Categoria'
          value={ name }
        />
        <Label 
          content='Icone'
          style={{ marginVertical:10 }}
        />
        <Picker 
          content={ icons }
          onValueChange={ setSelectedIcon }
          value={ selectedIcon }
        />
        <Label 
          content='Cor'
          style={{ marginVertical:10 }}
        />
        <Picker 
          content={ colors }
          onValueChange={ setSelectedColor }
          value={ selectedColor }
        />
        <Button
          content='Criar'
          onPress={ () => send() }
          style={{ marginTop:15 }}
        />
        <Error 
          error={ error }
          style={{ marginTop:10 }}  
        />
      </View>
    </ScrollView>
  )
}

export default Form;