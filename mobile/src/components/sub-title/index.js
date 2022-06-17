import subTitleStyles from './styles';
import { Text } from 'react-native';


const SubText = ({ content, style }) => {
  return (
    <Text style={ [ style, subTitleStyles ] }>{ content }</Text>
  )
}

export default SubText