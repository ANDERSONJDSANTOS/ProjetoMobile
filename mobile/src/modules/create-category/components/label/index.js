import { Text } from 'react-native';
import styles from './styles';

const Label = ({ content, style }) => {
  return (
    <Text style={[ style, styles]}>
      { content }
    </Text>
  );
}

export default Label