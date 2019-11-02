import { createAppContainer, createStackNavigator } from "react-navigation";

import MainNavigator from "./MainNavigator";
import DeckDetailsScreen from "../screens/DeckDetailsScreen";

export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainNavigator,
    DeckDetailsScreen: {
      screen: DeckDetailsScreen,
      navigationOptions: { title: "Deck Details" }
    }
  })
);
