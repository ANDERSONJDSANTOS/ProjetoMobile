import Login from './src/screens/login';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={ containerStyle }>
      <Login/>
    </View>
  );
}

const containerStyle = {
  backgroundColor:'black',
  height:'100%',
  width:'100%'
};