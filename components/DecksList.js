import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import handleReceiveDecksAction from "../store/actions/handleReceiveDecks";
import { useDispatch } from "react-redux";
import { formatDecks } from "../utils/helpers";
import Deck from "./Deck";

function DecksList({ navigation }) {
  const dispatch = useDispatch();
  const decks = useSelector((state) => formatDecks(state));
  useEffect(() => dispatch(handleReceiveDecksAction()), [dispatch]);
  return (
    <View>
      <FlatList
        data={decks}
        // keyExtractor={(deck) => deck.id}
        renderItem={({ item: deck }) => (
          <Deck key={deck.id} deck={deck} navigation={navigation} />
        )}
      />
    </View>
  );
}

export default DecksList;
