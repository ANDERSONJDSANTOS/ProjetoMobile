import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Api from '../../../../externals/api';
import styles from './styles';

const Category = ({ background, icon, name, onPress, setCategories, index, tagId }) => {
  const api = new Api();

  async function send(id) {
    try {
      setCategories((categories) => {
        const newCategories = categories.filter((value, i) => i === index);
        return newCategories;
      });
      await api.deleteTag(id);
    }
    catch(err) {
      console.log(err);
    }
  }
  
  return (
    <TouchableOpacity onPress={ onPress }>
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
        <Icon 
          style={ styles.trash }
          name='trash'
          onPress={() => send(tagId)}
        />
      </View>
    </TouchableOpacity>
  )
}

export default Category