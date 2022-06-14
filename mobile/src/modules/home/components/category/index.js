import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Category = ({ background, icon, name }) => {
  
  return (
    <TouchableOpacity>
      <View style={ styles.container }>
        <View style={ [styles.circle, { backgroundColor:background }] }>
          <Icon
            color='white'
            name={ icon }
            size={ 24 }
          />
        </View>
        <View style={ styles.textContainer}>
          <Text style={ styles.text }>{ name }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Category