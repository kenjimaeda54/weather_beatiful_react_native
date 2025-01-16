import { Modalize } from "react-native-modalize"
import { ForwardRefRenderFunction } from "react"
import { Container, GoBackLogin, Title } from "./styleCustomModal"
import { Dimensions, TouchableOpacity } from "react-native"
import RowTitleAndSubTitle from "../row_item_and_subtitle/RowTitleAndSubTitle"
import { useKeyboard } from "../../../utils/use_keyboard/useKeyboard"

interface ICustomModalProps {
  title: string,
  buttonTitle: string,
  onNavigation?: () => void
}

const { height } = Dimensions.get("screen")

export const CustomModal: ForwardRefRenderFunction<Modalize, ICustomModalProps> = ({ title, buttonTitle, onNavigation }, ref) => {
  const keyboardHeight = useKeyboard()
  return (
    <Modalize
      ref={ref}
      handleStyle={{
        display: "none"
      }}
      alwaysOpen={height * 0.4 + keyboardHeight}
      modalHeight={height * 0.4 + keyboardHeight}
    >
      <Container>
        <Title>{title}</Title>
        <RowTitleAndSubTitle maxLength={37} title="Email" placeHolderText="example@gmail.com" />
        <RowTitleAndSubTitle maxLength={10} title="Senha" placeHolderText="123456abc" />
        <TouchableOpacity onPress={onNavigation}>
          <GoBackLogin>{buttonTitle}</GoBackLogin>
        </TouchableOpacity>
      </Container>
    </Modalize>
  )
}