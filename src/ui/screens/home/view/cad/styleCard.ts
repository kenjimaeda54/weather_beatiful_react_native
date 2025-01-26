import { Text, View } from "react-native";
import styled from "styled-components";


export const Container = styled(View)` 
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-horizontal: 15px;
  padding-vertical: 15px;
  border-radius: 25px;
  gap: 20px;
 `

export const Title = styled(Text)` 
  font-size: 23px;    
  color: ${({ theme }) => theme.colors.primary};  
  font-family: ${({ theme }) => theme.fonts.latoBold};
 `

export const Temperature = styled(Text)` 
  font-size: 16px;    
  color: ${({ theme }) => theme.colors.primary};  
  font-family: ${({ theme }) => theme.fonts.latoBold};
  padding-vertical: 7px;  
 `

export const YesterdayCard = styled(View)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-horizontal: 15px;
  padding-vertical: 15px;
  border-radius: 10px;
 `;

export const TitleYesterday = styled(Text)` 
  font-size: 17px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.latoBold};
`;

export const StatusTemperatureYesterday = styled(Text)` 
  font-size: 17px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.latoRegular};
`;