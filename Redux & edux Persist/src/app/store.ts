import { configureStore , combineReducers} from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


//commbine all reducers
const rootReducer = combineReducers({
        counter: todoReducer,
})

//create configureStore
const persistConfig = {
        key: 'root',
        storage,
}

//persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

//create store
export const store = configureStore({
        reducer: persistedReducer
});

//create persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // AppDispatch is a type that represents the dispatch function returned by store.dispatch, which is used to dispatch actions to the store.