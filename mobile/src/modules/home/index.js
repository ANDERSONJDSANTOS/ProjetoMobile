import ThereAreNotCategories from './components/there-are-not-categories';
import CircleWithAPlus from '../../components/circle-with-a-plus/index';

import ListOfCategories from './components/list-of-categories/index';
import Loading from '../../components/loading/index';

import { useEffect, useState } from 'react';
import Api from '../../externals/api';

import { View } from 'react-native';

const HomeModule = ({ navigation }) => {
  const [ categories, setCategories ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  
  const api = new Api();
  const goToCreateCategoryPage = () => navigation.navigate('Criar categoria');

  useEffect(() => {
    
    (async () => {
      try {
        const res = await api.getCategories();
        setCategories(res.data);
      }
      catch(err) {
        console.log(err.response.data)
      }
      finally {
        setLoading(false);
      }
    })();
  });

  return (
    <View style={{ flex:1 }}>
      {loading ? (<Loading/>) :
      (<>
        { categories.length > 0 
        ? (
          <ListOfCategories 
            categories={ categories } 
            navigation={ navigation }
            setCategories={ setCategories }
          />
        ) 
        : (<ThereAreNotCategories/>)}
        <CircleWithAPlus onPress={ goToCreateCategoryPage }/>
      </>)
      }
    </View>
  );
}

export default HomeModule;