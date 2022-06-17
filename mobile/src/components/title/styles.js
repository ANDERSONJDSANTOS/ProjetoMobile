import { StyleSheet } from "react-native";
import color from '../../global/colors';

const styles = StyleSheet.create({
  content: {
    color:'white',
    fontWeight:'bold'
  },

  highlight: {
    color:color.main.highlight,
    fontWeight:'bold'
  },

  title: {
    fontSize:30,
    textAlign:'center'
  }
}); 

export default styles;