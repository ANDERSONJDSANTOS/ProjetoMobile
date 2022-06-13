import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Screens from './src/stacks/index';

import { View } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    background:'black'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={ theme }>    
      <View style={ containerStyle }>
        <Screens/>
      </View>
    </NavigationContainer>
  );
}

const containerStyle = {
  height:'100%',
  width:'100%'
};