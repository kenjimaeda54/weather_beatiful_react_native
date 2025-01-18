import { Modalize } from "react-native-modalize"
import { ForwardRefRenderFunction } from "react"
import { ButtonLogin, Container, GoBackLogin, Title, TitleLogin } from "./styleCustomModal"
import { Dimensions, TouchableOpacity, View } from "react-native"
import RowTitleAndSubTitle from "../row_item_and_subtitle/RowTitleAndSubTitle"
import { useKeyboard } from "../../../utils/use_keyboard/useKeyboard"
import { Portal } from "react-native-portalize"

interface ICustomModalProps {
  title: string,
  buttonTitle: string,
  onNavigation?: () => void,
  onHandleContinue: () => void
}

const { height } = Dimensions.get("screen")

export const CustomModal: ForwardRefRenderFunction<Modalize, ICustomModalProps> = ({ title, buttonTitle, onNavigation, onHandleContinue }, ref) => {
  const keyboardHeight = useKeyboard()
  return (
    <Portal>
      <Modalize
        ref={ref}
        handleStyle={{
          display: "none"
        }}
        alwaysOpen={height * 0.45 + keyboardHeight}
        modalHeight={height * 0.45 + keyboardHeight}
      >
        <Container>
          <Title>{title}</Title>
          <RowTitleAndSubTitle maxLength={37} title="Email" placeHolderText="example@gmail.com" />
          <RowTitleAndSubTitle maxLength={10} title="Senha" placeHolderText="123456abc" />
          <View>
            <ButtonLogin onPress={onHandleContinue}>
              <TitleLogin>Continuar</TitleLogin>
            </ButtonLogin>
            <TouchableOpacity onPress={onNavigation}>
              <GoBackLogin>{buttonTitle}</GoBackLogin>
            </TouchableOpacity>
          </View>
        </Container>
      </Modalize>

    </Portal>
  )
}