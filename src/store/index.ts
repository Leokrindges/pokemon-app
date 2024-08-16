import { configureStore } from "@reduxjs/toolkit";
import { pokemonAdapter, pokemonSlice } from "./modules/pokemons/pokemonsSlice";

export const store = configureStore({
  reducer: { pokemons: pokemonSlice.reducer },
});

export type GlobalState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
const pokemonSelector = pokemonAdapter.getSelectors<GlobalState>(
  (state) => state.pokemons
);

export const allPokemons = pokemonSelector.selectAll(store.getState());
