import TextInput from '../../../../components/text-input/index';
import Button from '../../../../components/button/index';

import colors from '../../../../global/validColors';
import Picker from '../../../../components/picker';

import { ScrollView, View } from 'react-native';
import { useState } from 'react';

import icons from '../../../../global/icons';
import Label from '../label/index';


const Form = ({ navigation }) => {
  const [ name, setName ] = useState('');
  const [ selectedIcon, setSelectedIcon ] = useState('');
  const [ selectedColor, setSelectedColor ] = useState('');

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
          onPress={ () => navigation.goBack() }
          style={{ marginTop:15 }}
        />
      </View>
    </ScrollView>
  )
}

export default Form;