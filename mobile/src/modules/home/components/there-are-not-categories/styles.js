import colors from '../../../../global/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    height:'100%',
    justifyContent:'center',
  },

  text: {
    color:'white',
    fontSize:16,
    justifyContent:'center',
    textAlign:'center'
  },

  title: {
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    marginBottom:10,
    textAlign:'center'
  },

  highlight: {
    color:colors.main.highlight,
  }
});

export default styles;