import { StyleSheet } from 'react-native';
import color from '../../global/colors';

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor:color.main.highlight,
    borderRadius:60/2,
    bottom:15,
    height:60,
    justifyContent:'center',
    position:'absolute',
    right:15,
    width:60
  }
});

export default styles;