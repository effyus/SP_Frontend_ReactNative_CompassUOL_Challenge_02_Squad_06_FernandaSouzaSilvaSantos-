import styled from "styled-components/native";
import {RectButton} from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton)`
width: ${RFValue(130)}px;
height: ${RFValue(130)}px;
background-color: grey;
align-items: center;
flex-direction: row;
margin-bottom: ${RFValue(16)}px;
border-radius: ${RFValue(5)}px;
box-shadow: 1px 3px 3px rgba(0,0,0,2);
`;