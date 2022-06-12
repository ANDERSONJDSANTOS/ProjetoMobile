import { Text } from 'react-native';
import styles from './styles';

const DontHaveAnAccount = () => {
  return (
    <Text style={ styles.text }>
      <Text>Não tem uma conta ? </Text>
      <Text style={ styles.highlight }>Crie uma</Text>
    </Text>
  )
}

export default DontHaveAnAccount;