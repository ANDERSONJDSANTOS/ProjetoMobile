import { Text } from 'react-native';
import styles from './styles';

const Title = ({ content, highlightContent, style }) => {
  return (
    <Text style={[ style, styles.title ]}>
      <Text style={ styles.content }>{ content }</Text>
      <Text style={ styles.highlight }>{ highlightContent }</Text>
    </Text>
  )
}

export default Title;