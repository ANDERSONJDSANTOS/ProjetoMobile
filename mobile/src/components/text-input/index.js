import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, View } from 'react-native';

import styles from './styles';

const Input = (props) => {
  return (
    <View style={[styles.container, props.customStyles]}>
      <Icon
        color='white'
        name={ props.icon }
        size={ 20 }
        style={ styles.icon }
      />
      <TextInput
        autoComplete={ props.autoComplete }
        maxLength={ props.maxLength }
        onChangeText={ props.onChangeText }
        placeholder={ props.placeholder }
        placeholderTextColor='white'
        secureTextEntry={ props.secure }
        style={ styles.input }
        value={ props.value }
      />
    </View>
  );
}

export default Input;