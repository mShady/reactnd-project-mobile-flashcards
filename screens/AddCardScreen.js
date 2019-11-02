import React, { Component } from "react";
import { StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import TextButton from "../components/TextButton";
import { addCardToDeck } from "../utils/storageApi";
import { connect } from "react-redux";
import { upsertDeck } from "../actions";

class AddDeckScreen extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleChangeQuestionText = question => {
    this.setState({ question });
  };

  handleChangeAnswerText = answer => {
    this.setState({ answer });
  };

  handleAddCard = () => {
    const { dispatch, navigation } = this.props;
    const { deckId } = navigation.state.params;

    const card = this.state;
    this.setState({
      question: "",
      answer: ""
    });

    addCardToDeck(deckId, card)
      .then(deck => {
        console.log("Deck after addCardToDeck:", deck);
        dispatch(upsertDeck(deck));
      })
      .then(() => {
        navigation.navigate("DeckDetailsScreen", { deckId });
      });
  };

  render() {
    return (
      <KeyboardAvoidingView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        behavior="padding"
        enabled
      >
        <TextInput
          value={this.state.question}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder="Question"
          onChangeText={this.handleChangeQuestionText}
        />
        <TextInput
          value={this.state.answer}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder="Answer"
          onChangeText={this.handleChangeAnswerText}
        />
        <TextButton text="Add" onPress={this.handleAddCard}></TextButton>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddDeckScreen);

AddDeckScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  questionText: {
    fontSize: 20,
    color: "black",
    lineHeight: 24,
    textAlign: "center",
    margin: 20
  }
});
