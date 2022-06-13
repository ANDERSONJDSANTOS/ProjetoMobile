import SignUpForm from './components/form/index';
import SubTitle from './components/sub-title';

import { ScrollView, View } from 'react-native';
import Title from './components/title';

const SignUpModule = () => {
  return (
    <ScrollView >
      <View style={ containerStyle }>
        <Title/>
        <SubTitle/>
        <SignUpForm/>
      </View>
    </ScrollView>
  );
}

const containerStyle = {
  flex:1,
  justifyContent:'center',
  padding:20
}

export default SignUpModule;