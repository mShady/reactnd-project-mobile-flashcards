import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import DecksScreen from "../screens/DecksScreen";
import AddDeckScreen from "../screens/AddDeckScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: DecksScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Decks",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-bookmarks` : "md-bookmarks"}
    />
  )
};

HomeStack.path = "";

const AddDeckStack = createStackNavigator(
  {
    AddDeck: AddDeckScreen
  },
  config
);

AddDeckStack.navigationOptions = {
  tabBarLabel: "Add Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-add-circle` : "md-add-circle"}
    />
  )
};

AddDeckStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AddDeckStack
});

tabNavigator.path = "";

export default tabNavigator;
