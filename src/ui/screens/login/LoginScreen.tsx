import { Text, View } from "react-native";
import { useTheme } from "styled-components";
import { Container, ImageLogo } from "./styleLogin";
import { CustomModal } from "../../components/modal/CustomModal";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootNavigation } from "../../../utils/navigation/Navigation";

type TypeNavigation = NavigationProp<RootNavigation, "SignUp">

export default function LoginScreen() {
  const { navigate } = useNavigation<TypeNavigation>()

  return (
    <Container>
      <ImageLogo
        resizeMode="cover"
        source={require("../../../../assets/images/initial_logo.png")}
      />
      <CustomModal title="Iniciar sessão" buttonTitle="Criar nova conta" onNavigation={() => navigate('SignUp')} />
    </Container>

  )
}