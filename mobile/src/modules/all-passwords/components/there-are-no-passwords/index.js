import Title from '../../../../components/title/index';
import { View, Text } from 'react-native';

import styles from './styles';

const ThereAreNotPasswords = () => {
  return (
    <View style={ styles.container }>
      <Title
        content='Nenhuma senha foi '
        highlightContent='encontrada'
      />
      <Text style={ styles.text }>
        Você não possui nenhuma senha ainda, clique no circulo verde
        para criar uma senha.
      </Text>
    </View>
  );
}

export default ThereAreNotPasswords