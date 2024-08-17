import { configureStore } from "@reduxjs/toolkit";
import { pokemonAdapter, pokemonSlice } from "./modules/pokemons/pokemonsSlice";
import { pokedexAdapter, pokedexSlice } from "./modules/pokedex/pokedex.slice";

export const store = configureStore({
  reducer: { pokemons: pokemonSlice.reducer, pokedex: pokedexSlice.reducer },
});

export type GlobalState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
const pokemonSelector = pokemonAdapter.getSelectors<GlobalState>(
  (state) => state.pokemons
);
const pokedexSelector = pokedexAdapter.getSelectors<GlobalState>(
  (state) => state.pokedex
);

export const allPokemons = pokemonSelector.selectAll(store.getState());

export const allPokemonPokedex = pokedexSelector.selectAll(store.getState());
