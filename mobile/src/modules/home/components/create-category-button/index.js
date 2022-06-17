import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

const CreateCategoryButton = ({ navigation }) => {
  const goToCreateCategoryPage = () => navigation.navigate('Criar categoria');

  return (
    <TouchableOpacity onPress={ goToCreateCategoryPage }>
      <View style={ styles.container }>
        <Icon
          color='white'
          name='plus'
          size={ 30 }
        />
      </View>
    </TouchableOpacity>
  );
}

export default CreateCategoryButton;