import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const ButtonInput = (props) => {
  return (
    <TouchableOpacity style={ styles.container } onPress={ props.onPress }>
      <Text style={ styles.text }>
        { props.content }
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonInput;