import { Text } from 'react-native';
import styles from './style';

const Logo = (props) => {
  return (
    <Text style={[ styles.logo, props.customStyles ]}>
      <Text style={ styles.safe }>SAFE</Text>
      <Text style={ styles.pass }>PASS</Text>
    </Text>
  );
}

export default Logo;