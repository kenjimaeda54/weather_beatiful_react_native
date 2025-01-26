import { Dimensions, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

const { height } = Dimensions.get("screen");

export const Container = styled(SafeAreaView)` 
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary}; 
  padding-vertical: 25px;
  padding-horizontal: 15px; 
  gap: 15px;
`;

export const TitleLocation = styled(Text)` 
  font-size: 23px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.latoRegular};
`;

export const Name = styled(Text)` 
  font-size: 17px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.latoBold};
  line-height: 25px;
`;

export const Temperature = styled(Text)` 
  font-size: ${height * 0.13}px;   
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.latoBold};
`;