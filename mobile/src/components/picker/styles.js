import { StyleSheet } from "react-native";
import color from "../../global/colors";

const styles = StyleSheet.create({
  container: {
    borderRadius:8,
    overflow:'hidden'
  },

  picker: {
    backgroundColor:color.main.input,
    borderRadius:8,
    color:'white'
  }
});

export default styles;