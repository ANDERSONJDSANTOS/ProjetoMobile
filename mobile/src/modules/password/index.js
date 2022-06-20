import { View } from "react-native"
import Title from "../../components/title";
import PasswordForm from "./components/form/index"

const PasswordModule = ({ navigation }) => {
  return (
    <View>
      <Title
        content="Cadastre uma "
        highlightContent="senha"
        style={{marginTop: 15}}
      />
      <PasswordForm navigation={ navigation }/>
    </View>
  );
}

export default PasswordModule;