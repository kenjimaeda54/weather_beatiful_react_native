import React from "react";
import { Container, TextInputGeneric, Title } from "./styleRowTitleAndSubtitle";

interface IRowTitleAndSubTitleProps {
  title: string,
  placeHolderText: string,
}

export default function RowTitleAndSubTitle({ title, placeHolderText }: Readonly<IRowTitleAndSubTitleProps>) {

  return (
    <Container>
      <Title>{title}</Title>
      <TextInputGeneric placeholder={placeHolderText} />
    </Container>
  )
}