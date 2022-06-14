import { View, Text } from 'react-native';
import styles from './styles';

const ThereAreNotCategories = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Nenhuma categoria <Text style={ styles.highlight }>encontrada :(</Text>
      </Text>
      <Text style={ styles.text }>
        Você não possui nenhuma categoria de senha ainda, clique no circulo verde
        para criar uma categoria para guardar suas senhas.
      </Text>
    </View>
  );
}

export default ThereAreNotCategories;