import { Text, TextInput, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)` 
   gap: 10px;
`;

export const Title = styled(Text)` 
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.latoRegular};
`;

export const TextInputGeneric = styled(TextInput).attrs(({ theme }) => ({ placeholderTextColor: theme.colors.gray }))`  
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 5px 13px;
  font-size: 16px;  
  font-family: ${({ theme }) => theme.fonts.latoRegular}; 
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;     
`;