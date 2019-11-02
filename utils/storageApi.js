import { AsyncStorage } from "react-native";
export const MOBILE_FLASHCARDS_STORAGE_KEY = "MOBILE_FLASHCARDS_STORAGE_KEY";

export function submitEntry({ key, entry }) {
  return AsyncStorage.mergeItem(
    MOBILE_FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}

export function removeEntry(key) {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(MOBILE_FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
  });
}
