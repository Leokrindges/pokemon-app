import { combineReducers } from "@reduxjs/toolkit";
import { pokemonReducer } from "./modules/pokemons/pokemonsSlice";

export const rootReducer = combineReducers({
  pokemons: pokemonReducer,
});
