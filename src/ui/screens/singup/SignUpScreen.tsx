import { CustomModal } from "./component/modal/CustomModal";
import { Container, ImageLogo } from "./styleSignUp";

export default function SingUpScreen() {
  return (
    <Container>
      <ImageLogo
        resizeMode="cover"
        source={require("../../../../assets/images/initial_logo.png")}
      />
      <CustomModal />
    </Container>
  )

}