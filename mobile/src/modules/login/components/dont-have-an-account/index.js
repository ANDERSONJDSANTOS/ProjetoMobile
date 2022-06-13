import { Text } from 'react-native';
import styles from './styles';

const DontHaveAnAccount = ({ navigation }) => {
  const goToSignUpScreen = () => navigation.navigate('Cadastre-se');

  return (
    <Text style={ styles.text }>
      <Text>Não tem uma conta ? </Text>
      <Text onPress={ () => goToSignUpScreen() } style={ styles.highlight }>
        Crie uma
      </Text>
    </Text>
  );
}

export default DontHaveAnAccount;