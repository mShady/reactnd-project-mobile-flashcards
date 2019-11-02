import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import TextButton from "../components/TextButton";

class DeckDetailsScreen extends Component {
  render() {
    const { deck, navigation } = this.props;
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <Text style={[styles.text, { fontSize: 40 }]}>{deck.title}</Text>
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
      </ScrollView>
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
    lineHeight: 24,
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
