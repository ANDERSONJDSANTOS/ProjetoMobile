import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, View } from 'react-native';

import Category from '../category';

const ListOfCategories = ({ categories, navigation, setCategories }) => {
  return (
    <View style={{ height:'100%' }}>
      <FlatList
        data={ categories }
        renderItem={({ item, index }) => CreateCategory(item, navigation, setCategories, index)}
      />
    </View>
  );
}


function CreateCategory(category, navigation, setCategories, index) {

  async function goToPasswordsPage(tagId) {
    try {
      await AsyncStorage.setItem('tagId', tagId);
      navigation.push('Todas as senhas');
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <Category
      background={ category.background }
      icon={ category.icon }
      name={ category.name }
      tagId={ category.id }
      onPress={ () => goToPasswordsPage(category.id) }
      setCategories={ setCategories }
    />
  );
}

export default ListOfCategories;