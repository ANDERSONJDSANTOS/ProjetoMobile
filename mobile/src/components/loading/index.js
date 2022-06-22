import { View } from 'react-native';
import styles from './styles';

import Title from '../title';

const Loading = () => {
  return (
    <View style={ styles }>
      <Title content='Carregando'/>
    </View>
  );
}

export default Loading;