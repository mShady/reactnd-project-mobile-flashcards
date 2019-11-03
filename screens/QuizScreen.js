import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import TextButton from "../components/TextButton";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notifications";

const initialState = {
  showAnswer: false,
  questionIndex: 0,
  correctAnswers: 0
};
class QuizScreen extends Component {
  state = initialState;
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params;

    return {
      title: deckId
    };
  };

  render() {
    const { deck, navigation } = this.props;
    const { showAnswer, questionIndex, correctAnswers } = this.state;

    const questionsCount = deck.questions.length;
    if (questionsCount === 0) {
      return (
        <Text style={[styles.text, { fontSize: 60 }]}>
          No cards in this deck!
        </Text>
      );
    }

    if (questionIndex < questionsCount) {
      return (
        <View>
          <Text style={[styles.text]}>
            {questionIndex + 1}/{questionsCount}
          </Text>
          <Text style={[styles.text, { fontSize: 60 }]}>
            {showAnswer
              ? deck.questions[questionIndex].answer
              : deck.questions[questionIndex].question}
          </Text>
          <TextButton
            text={showAnswer ? "Question" : "Answer"}
            onPress={() =>
              this.setState(({ showAnswer }) => ({ showAnswer: !showAnswer }))
            }
          ></TextButton>

          <TextButton
            text="Correct"
            onPress={() =>
              this.setState(({ correctAnswers, questionIndex }) => ({
                showAnswer: false,
                correctAnswers: correctAnswers + 1,
                questionIndex: questionIndex + 1
              }))
            }
          ></TextButton>

          <TextButton
            text="Incorrect"
            onPress={() =>
              this.setState(({ questionIndex }) => ({
                showAnswer: false,
                questionIndex: questionIndex + 1
              }))
            }
          ></TextButton>
        </View>
      );
    } else {
      clearLocalNotification().then(setLocalNotification);

      return (
        <View>
          <Text style={[styles.text, { fontSize: 60 }]}>Done!</Text>
          <Text style={styles.text}>
            Score: {correctAnswers}/{questionsCount} (
            {parseFloat((correctAnswers / questionsCount) * 100).toFixed(2)} %)
          </Text>

          <TextButton
            text="Restart Quiz"
            onPress={() => this.setState(() => initialState)}
          ></TextButton>

          <TextButton
            text="Back to Deck"
            onPress={() =>
              navigation.navigate("DeckDetailsScreen", {
                deckId: deck.title
              })
            }
          ></TextButton>
        </View>
      );
    }
  }
}

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deck: decks[deckId]
  };
}

export default connect(mapStateToProps)(QuizScreen);

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
