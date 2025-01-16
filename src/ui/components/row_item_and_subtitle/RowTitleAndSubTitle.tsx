import React, { useState } from "react";
import { Container, Feedback, TextInputGeneric, Title } from "./styleRowTitleAndSubtitle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface IRowTitleAndSubTitleProps {
  title: string,
  placeHolderText: string,
  maxLength: number
}

export default function RowTitleAndSubTitle({ title, placeHolderText, maxLength }: Readonly<IRowTitleAndSubTitleProps>) {
  const [valueInput, setValueInput] = useState('');

  return (
    <Container>
      <Title>{title}</Title>
      <TextInputGeneric
        value={valueInput}
        autoCorrect={false}
        maxLength={maxLength}
        onChangeText={setValueInput}
        placeholder={placeHolderText} />
      <Feedback>Restam: {maxLength - valueInput.length} caracteres</Feedback>
    </Container>
  )
}