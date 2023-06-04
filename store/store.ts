import { todoReducer } from './todo-slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootPersistConfig = {
    key: 'todo-app-root',
    storage: AsyncStorage,
};

const todoPersistConfig = {
    key: 'todo-app',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    todo: persistReducer(todoPersistConfig, todoReducer),
});

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
export type RootDispatch = ReturnType<typeof store.dispatch>;