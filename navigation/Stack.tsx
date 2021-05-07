import React from "react";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Detail from "../screens/Detail";

const RootStack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "transparent",
          shadowColor: "transparent",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <RootStack.Screen name="Tabs" component={Tabs} />
      <RootStack.Screen name="Detail" component={Detail} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
