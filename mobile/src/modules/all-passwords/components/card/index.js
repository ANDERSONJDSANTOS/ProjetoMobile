import Icon from 'react-native-vector-icons/FontAwesome';
import Api from '../../../../externals/api';

import { View, Text } from 'react-native';
import styles from './styles';

const Card = ({ item, index, setPasswords }) => {
  const api = new Api();

  async function send(id) {
    try {
      setPasswords((passwords) => {
        const newPasswords = passwords.filter((value, i) => i === index);
        return newPasswords;
      });
      await api.deletePassword(id);
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>
        <Text>Url: { item.url }{'\n'}</Text>
        <Text style={{ marginTop:10 }}>Nome: { item.name }{'\n'}</Text>
        <Text>Senha: {item.password}</Text>
      </Text>
      <Icon 
        style={ styles.trash }
        name='trash'
        onPress={() => send(item.id)}
      />
    </View>    
  );
}

export default Card;