import color from '../../../../global/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor:color.main.highlight,
    color:'white',
    marginBottom:15,
    padding:15,
    position:'relative',
    width:'100%'
  },

  text: {
    fontSize:16
  }, 

  password: {
    backgroundColor:'red',
    color:'black'
  },

  trash: {
    alignItems:'center',
    fontSize:20,
    height:'100%',
    textAlignVertical:'bottom',
    position:'absolute',
    right:15
  }
});

export default styles;