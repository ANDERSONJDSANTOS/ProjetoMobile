import { FlatList, View } from 'react-native';
import Category from '../category';

const ListOfCategories = ({ categories }) => {
  return (
    <View style={{ height:'100%' }}>
      <FlatList
        data={ categories }
        renderItem={({ item }) => CreateCategory(item)}
      />
    </View>
  );
}


function CreateCategory(category) {
  return (
    <Category
      background={ category.background }
      icon={ category.icon }
      name={ category.name }
    />
  );
}

export default ListOfCategories;