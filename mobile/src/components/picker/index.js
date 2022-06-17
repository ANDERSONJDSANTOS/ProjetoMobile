import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';

import styles from './styles';

const PickerSelector = ({ content, onValueChange, style, value }) => {
  return (
    <View style={[ styles.container, style ]}>
      <Picker 
        onValueChange={ (itemValue) => onValueChange(itemValue) } 
        selectedValue={ value }
        style={[ styles.picker ]}
        itemStyle={{ color:'green' }}
      >
        { content.map(CreateContent) }
      </Picker>
    </View>
    
  );
}

function CreateContent(content, index) {
  return (
    <Picker.Item 
      key={ index }
      label={ content.label } 
      value={ content.value }
    />
  );
}

export default PickerSelector;