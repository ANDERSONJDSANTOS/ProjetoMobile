import { View, FlatList } from 'react-native';
import Card from '../card/index';

const ListOfCards = ({ password, setPasswords }) => {
  return (
    <View style={{ height:'100%' }}>
      <FlatList
        data={ password }
        renderItem={({ item, index }) => {
          return (
            <Card 
              item={ item } 
              index={index} 
              setPasswords={setPasswords}
            />
          )
      }}
      />
    </View>
  );
}

export default ListOfCards;