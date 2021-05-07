import React from "react";
import Title from "./Title";

interface IProps {
  title: string;
  children: React.ReactChild;
}

const List: React.FC<IProps> = ({ title, children }) => (
  <>
    <Title title={title} />
    <>{children}</>
  </>
);

export default List;
