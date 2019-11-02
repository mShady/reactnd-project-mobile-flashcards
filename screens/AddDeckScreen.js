import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import TextButton from "../components/TextButton";
import { saveDeckTitle } from "../utils/storageApi";
import { connect } from "react-redux";
import { upsertDeck } from "../actions";

class AddDeckScreen extends Component {
  state = {
    deckTitle: ""
  };

  handleChangeText = deckTitle => {
    this.setState({ deckTitle });
  };

  handleAddDeck = () => {
    const title = this.state.deckTitle;
    const { dispatch } = this.props;
    saveDeckTitle(title).then(deck => {
      dispatch(upsertDeck(deck));
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
        <Text style={styles.questionText}>
          What is the title of your new deck?
        </Text>
        <TextInput
          value={this.state.deckTitle}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder="Deck Title"
          onChangeText={this.handleChangeText}
        />
        <TextButton text="Add" onPress={this.handleAddDeck}></TextButton>
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
