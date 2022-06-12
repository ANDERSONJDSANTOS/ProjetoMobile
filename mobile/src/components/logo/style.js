import { StyleSheet } from 'react-native';
import color from '../../global/colors';

const styles = StyleSheet.create({
  logo: {
    fontSize:40,
    fontWeight:"bold",
    letterSpacing:2,
    textAlign:'center'
  },

  safe: {
    color:"white"
  },

  pass: {
    color:color.main.highlight
  }
});

export default styles;