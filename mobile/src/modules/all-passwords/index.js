import ThereAreNotPasswords from './components/there-are-no-passwords/index';
import CircleWithAPlus from '../../components/circle-with-a-plus/index';

import Loading from '../../components/loading/index';
import Cards from './components/list-of-cards/index';

import { useState, useEffect } from 'react';
import Api from '../../externals/api';

import { View } from 'react-native';

const AllPasswordsModule = ({ navigation }) => {
  const [ passwords, setPasswords ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const goToCreatePasswordScreen = () => navigation.push('Cadastro de senhas');
  const api = new Api();

  useEffect(() => {
    
    (async () => {
      try {
        const res = await api.getPasswords();
        setPasswords(res.data);
      }
      catch(err) {
        console.log(err.response.data);
      }
      finally {
        setLoading(false);
      }
    })();

  });

  return (
    <View style={{ flex:1 }}>
      {loading ? (<Loading/>)  
      : 
      (<>
        {passwords.length === 0 
          ? (<ThereAreNotPasswords/>)
          : (<Cards password={ passwords } setPasswords={ setPasswords }/>) }
          <CircleWithAPlus onPress={ goToCreatePasswordScreen }/>
      </>)
    }
    </View>
  );
};

export default AllPasswordsModule;