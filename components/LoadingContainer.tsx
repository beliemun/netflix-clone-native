import React, { useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
`;

interface IProps {
  loading: boolean;
  children: React.ReactChild;
  getData: () => Promise<void>;
}

const LoadingContainer: React.FC<IProps> = ({ loading, children, getData }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  return loading ? (
    <Container>
      <ActivityIndicator color={"white"} />
    </Container>
  ) : (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={"white"}
        />
      }
      style={{ backgroundColor: "black" }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {children}
    </ScrollView>
  );
};

export default LoadingContainer;
