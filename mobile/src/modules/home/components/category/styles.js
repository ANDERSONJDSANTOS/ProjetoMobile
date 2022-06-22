import color from '../../../../global/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor:color.main.highlight,
    borderBottomWidth:1,
    display:'flex',
    flexDirection:'row',
    marginTop:15,
    paddingBottom:15,
    position:'relative'
  },

  circle: {
    alignItems:'center',
    borderRadius:55 / 2,
    height:55,
    justifyContent:'center',
    width:55
  },

  textContainer: {
    justifyContent:'center',
    marginLeft:15,
    borderColor:'red'
  },
  
  text: {
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  },

  trash: {
    alignItems:'center',
    color:'white',
    fontSize:20,
    height:'100%',
    textAlignVertical:'bottom',
    position:'absolute',
    right:15
  }
});

export default styles;