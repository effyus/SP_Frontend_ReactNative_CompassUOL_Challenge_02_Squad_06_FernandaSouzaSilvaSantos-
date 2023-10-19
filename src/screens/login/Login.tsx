import React from "react";
import { SafeAreaView } from "react-native";

import {
  Container,
  ContentHeader,
  Title,
  ContentBody,
  ContentFooter,
} from "./styles";
const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Screeen Login</Title>
        </ContentHeader>

        <ContentBody></ContentBody>

        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export { Login };
