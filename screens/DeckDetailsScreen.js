import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import TextButton from "../components/TextButton";
import ViewShot from "react-native-view-shot";

class DeckDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params;

    return {
      title: deckId
    };
  };

  render() {
    const { deck, navigation } = this.props;
    return (
      <View>
        <Text style={[styles.text, { fontSize: 60 }]}>{deck.title}</Text>
        <Text style={styles.text}>{deck.questions.length} cards</Text>

        <TextButton
          text="Add Card"
          onPress={() =>
            this.props.navigation.navigate("AddCardScreen", {
              deckId: deck.title
            })
          }
        ></TextButton>
        <TextButton
          text="Start Quiz"
          onPress={() =>
            this.props.navigation.navigate("QuizScreen", {
              deckId: deck.title
            })
          }
        ></TextButton>
      </View>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deck: decks[deckId]
  };
}

export default connect(mapStateToProps)(DeckDetailsScreen);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    margin: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  }
});
