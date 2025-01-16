import { NavigationProp, useNavigation } from "@react-navigation/native";
import { CustomModal } from "../../components/modal/CustomModal";
import { Container, ImageLogo } from "./styleSignUp";
import { RootNavigation } from "../../../utils/navigation/Navigation";

type TypeNavigation = NavigationProp<RootNavigation, "Login">

export default function SingUpScreen() {
  const { navigate } = useNavigation<TypeNavigation>()

  return (
    <Container>
      <ImageLogo
        resizeMode="cover"
        source={require("../../../../assets/images/initial_logo.png")}
      />
      <CustomModal title="Cadastro" buttonTitle="Voltar para iniciar sessão" onNavigation={() => navigate('Login')} />
    </Container>
  )

}