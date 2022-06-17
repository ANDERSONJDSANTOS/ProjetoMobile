import { View, StyleSheet, ScrollView } from 'react-native';
import SubTitle from '../../components/sub-title/index';

import Title from '../../components/title/index';
import SignUpForm from './components/form/index';

const SignUpModule = () => {
  return (
    <ScrollView>
      <View style={ styles.container }>
        <Title 
          content='Crie sua'
          highlightContent=' conta'
          style={ styles.title }
        />
        <SubTitle 
          content='Crie sua conta para que você possa guardar suas senhas com segurança.'
          style={{ marginBottom:20 }} 
        />
        <SignUpForm/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    padding:20
  },

  title: {
    marginBottom:15, 
  }
}); 

export default SignUpModule;