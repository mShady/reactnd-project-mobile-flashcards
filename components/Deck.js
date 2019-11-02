import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Deck extends Component {
  render() {
    const { deck } = this.props;
    console.log("deck", deck);
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("DeckDetailsScreen", {
            deckId: deck.title
          })
        }
      >
        <Text style={styles.text}>
          {deck.title} - {deck.questions.length} cards
        </Text>
      </TouchableOpacity>
    );
  }
}

function mapStateToProps(decks, { deckId }) {
  return {
    deck: decks[deckId]
  };
}

export default connect(mapStateToProps)(Deck);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "black",
    lineHeight: 24,
    textAlign: "center",
    margin: 20
  }
});
