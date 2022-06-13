import { Text } from 'react-native';
import styles from './styles';

const Title = () => {
  return (
    <Text style={ styles.title }>
      <Text>Crie sua</Text>
      <Text style={ styles.highlight }> conta</Text>
    </Text>
  )
}

export default Title;