import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from './actions/snackbar';
import accountsReducer from "./actions/accounts";
import transactionsReducer from "./actions/transactions";

export const store = configureStore({
    reducer: {
        snackbar: snackbarReducer,
        accounts: accountsReducer,
        transactions: transactionsReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch