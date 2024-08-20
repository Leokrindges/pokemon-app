import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./modules/pokemons/pokemonsSlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./modules/rootReducer";

const persistedReducer = persistReducer(
  {
    key: "app-store",
    storage: storage, // defaults to localStorage for web
    whitelist: ["pokedex"],
  },
  rootReducer
);

// export const store = configureStore({
//   reducer: { pokemons: pokemonSlice.reducer, pokedex: pokedexSlice.reducer },
// });

export const store = configureStore({
  reducer: { pokemons: pokemonSlice.reducer, persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// configuração da persistencia dos dados no localStorage
export const persistor = persistStore(store);

export type GlobalState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;