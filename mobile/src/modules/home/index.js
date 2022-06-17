import mockCategories from './components/list-of-categories/mockCategories';
import ThereAreNotCategories from './components/there-are-not-categories';

import CreateCategoryButton from './components/create-category-button/index';
import ListOfCategories from './components/list-of-categories/index';

import { View } from 'react-native';
import { useState } from 'react';

const HomeModule = ({ navigation }) => {
  const [ categories, setCategories ] = useState(mockCategories);

  return (
    <View style={{ flex:1 }}>
      { categories.length > 0 
      ? (<ListOfCategories categories={ categories }/>) 
      : (<ThereAreNotCategories/>)}
      <CreateCategoryButton navigation={ navigation } />
    </View>
  );
}

export default HomeModule;