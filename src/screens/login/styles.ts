import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: ${RFValue(5)}px;
`;

export const ContentHeader = styled.View`
  align-items: end;
  justify-content: end;
  padding-left: ${RFValue(20)}px;
  padding-top: ${RFValue(60)}px;
  margin-top: ${RFValue(60)}px;
 margin-bottom: ${RFValue(20)}px;
 
  
`;

export const Title = styled.Text`
text-align: end;
font-size: ${RFValue(25)}px;
`;
export const ContentBody = styled.View``;
export const ContentFooter = styled.View`
    align-items: center;
  justify-content: center;
  padding: ${RFValue(40)}px;
  `;
export const Description = styled.Text`
font-size: ${RFValue(15)}px;
`;