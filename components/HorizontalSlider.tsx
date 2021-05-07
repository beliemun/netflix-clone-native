import React from "react";
import { ScrollView } from "react-native";
import Title from "./Title";

interface IProps {
  title: string;
  children: React.ReactChild;
}

const HorizontalSlider: React.FC<IProps> = ({ title, children }) => (
  <>
    <Title title={title} />
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginBottom: 20,
      }}
    >
      {children}
    </ScrollView>
  </>
);

export default HorizontalSlider;
