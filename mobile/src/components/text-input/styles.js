import { StyleSheet } from 'react-native';
import color from '../../global/colors';

const styles = StyleSheet.create({
  container: {
    width:'100%'
  },

  input: {
    color:'white',
    backgroundColor:color.main.input,
    borderRadius:8,
    fontSize:18,
    paddingLeft:40,
    paddingRight:10,
    paddingVertical:10,
    width:'100%',
    zIndex:1
  },

  icon: {
    paddingLeft:10,
    paddingVertical:13,
    position: 'absolute',
    zIndex:2
  }
});

export default styles;