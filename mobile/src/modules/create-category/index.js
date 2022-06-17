import CategoryForm from './components/form/index';
import Title from '../../components/title/index';

import { StyleSheet, View } from 'react-native';

const CreateCategoryModule = ({ navigation }) => {
  return (
    <View style={ styles.container }>
      <Title
        content='Crie uma '
        highlightContent='categoria'
        style={{ marginBottom:20 }}
      />
      <CategoryForm navigation={ navigation }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    padding:20
  },
});

export default CreateCategoryModule;