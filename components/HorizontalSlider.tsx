import React from "react";
import { ScrollView } from "react-native";
import Title from "./Title";
import Vertical from "./Vertical";

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
