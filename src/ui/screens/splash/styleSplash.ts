import LottieView from "lottie-react-native";
import { View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)` 
  flex: 1;
  background-color: ${({ theme }) => theme.colors.splash};
  justify-content: center;
  align-items: center;  
`;

export const Lottie = styled(LottieView)` 
  width: 200px;
  height: 200px;  

`;  