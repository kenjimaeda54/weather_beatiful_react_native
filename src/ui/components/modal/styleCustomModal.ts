import { Text, View, } from "react-native";
import styled from "styled-components";



//padding: 35px 20px top right bottom left       
export const Container = styled(View)` 
  padding: 15px 20px 40px 20px; 
  gap: 23px;
`;


export const Title = styled(Text)` 
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.latoBold};
`;

export const GoBackLogin = styled(Text)` 
  font-size: 18px;
  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.latoRegular};
  align-self: center;
  text-decoration: underline;   
  text-decoration-color: ${({ theme }) => theme.colors.purple};
`;