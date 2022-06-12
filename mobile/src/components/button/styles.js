import color from '../../global/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor:color.main.highlight,
    borderRadius:8,
    padding:10,
    width:'100%'
  },

  text: {
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center'
  }
});

export default styles;