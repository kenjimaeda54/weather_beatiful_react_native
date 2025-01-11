import { View, Image } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`   
   flex: 1;
   background-color: ${({ theme }) => theme.colors.primary};
   justify-content: center; 
    align-items: center;  
 `;

export const ImageLogo = styled(Image)` 
   width: 400px;
   height: 400px;
 
 `;