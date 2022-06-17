import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const ButtonInput = ({ content, onPress, style }) => {
  return (
    <TouchableOpacity style={[ styles.container, style ]} onPress={ onPress }>
      <Text style={ styles.text }>
        { content }
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonInput;