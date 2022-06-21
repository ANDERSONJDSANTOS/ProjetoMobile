import CreateCategoryButton from './components/create-category-button/index';
import ThereAreNotCategories from './components/there-are-not-categories';

import ListOfCategories from './components/list-of-categories/index';
import { useEffect, useState } from 'react';

import Api from '../../externals/api';
import { View } from 'react-native';

const HomeModule = ({ navigation }) => {
  const [ categories, setCategories ] = useState([]);
  const api = new Api();

  useEffect(() => {
    
    (async () => {
      try {
        const res = await api.getCategories();
        setCategories(res.data);
      }
      catch(err) {
        console.log(err.response.data)
      }
    })();

  });

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