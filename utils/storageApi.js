import { AsyncStorage } from "react-native";
const MOBILE_FLASHCARDS_STORAGE_KEY = "MOBILE_FLASHCARDS_STORAGE_KEY";

export function getDecks() {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
}

export function getDeck(key) {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data[key];
  });
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    MOBILE_FLASHCARDS_STORAGE_KEY,
    JSON.stringify(deckFactory(title))
  );
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[title] = {
      ...data[title],
      questions: data[title].questions.concat(card)
    };
    AsyncStorage.setItem(MOBILE_FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
  });
}

const deckFactory = title => ({
  [title]: {
    React: {
      title,
      questions: []
    }
  }
});
