import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

interface IProps {
  loading: boolean;
  children: React.ReactChild;
}

const LoadingContainer: React.FC<IProps> = ({ loading, children }) =>
  loading ? (
    <Container>
      <ActivityIndicator color={"white"} />
    </Container>
  ) : (
    <ScrollView
      style={{ backgroundColor: "black" }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {children}
    </ScrollView>
  );

export default LoadingContainer;
