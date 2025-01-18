import { Text, TouchableOpacity, View, } from "react-native";
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

export const ButtonLogin = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 5px;
  padding-vertical: 10px;
  margin-bottom: 15px;
`;

export const TitleLogin = styled(Text)` 
  text-align: center; 
  font-size: 17px;
  color: ${({ theme }) => theme.colors.splash};    
  font-family: ${({ theme }) => theme.fonts.latoRegular};   
`;