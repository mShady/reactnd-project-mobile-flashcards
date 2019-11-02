import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import MainNavigator from "./MainNavigator";
import DeckDetailsScreen from "../screens/DeckDetailsScreen";

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainNavigator,
  DeckDetailsScreen: {
    screen: DeckDetailsScreen,
    navigationOptions: { title: "Deck Details" }
  }
});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
