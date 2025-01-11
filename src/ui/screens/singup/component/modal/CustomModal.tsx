import { Modalize } from "react-native-modalize"
import { ForwardRefRenderFunction } from "react"
import { Container, GoBackLogin, Title } from "./styleCustomModal"
import RowTitleAndSubTitle from "./components/row_item_and_subtitle/RowTitleAndSubTitle"
import { Pressable, TouchableOpacity } from "react-native"

interface ICustomModalProps {
}

export const CustomModal: ForwardRefRenderFunction<Modalize, ICustomModalProps> = ({ }, ref) => {
  return (
    <Modalize
      ref={ref}
      handleStyle={{
        display: "none"
      }}
      alwaysOpen={500}
      adjustToContentHeight
    >
      <Container>
        <Title>Cadastro</Title>
        <RowTitleAndSubTitle title="Email" placeHolderText="example@gmail.com" />
        <RowTitleAndSubTitle title="Password" placeHolderText="123456abc" />
        <TouchableOpacity>
          <GoBackLogin>Voltar para login</GoBackLogin>
        </TouchableOpacity>
      </Container>
    </Modalize>
  )
}