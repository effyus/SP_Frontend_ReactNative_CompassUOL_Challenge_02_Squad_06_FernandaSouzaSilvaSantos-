import React from "react";
import { SafeAreaView } from "react-native";

import {
  Container,
  ContentHeader,
  Title,
  ContentBody,
  ContentFooter,
  Description,
} from "./styles";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import {RectButton} from 'react-native-gesture-handler';
const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Login</Title>
        </ContentHeader>

        <ContentBody></ContentBody>

        <ContentFooter>
          <Description>Or login with social account</Description>
          <ButtonSocialGoogle/>
        </ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export { Login };
