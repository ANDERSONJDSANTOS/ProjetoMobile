import { StyleSheet } from 'react-native';
import color from '../../global/colors';

const styles = StyleSheet.create({
  logo: {
    fontWeight:"bold",
    letterSpacing:2,
  },

  safe: {
    color:"white"
  },

  pass: {
    color:color.main.highlight
  }
});

export default styles;