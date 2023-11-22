import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const rootReducer = combineReducers({

});

const store = configureStore({
   reducer: rootReducer,
   // middleware: (getDefaultMiddleware) => {
   //    return getDefaultMiddleware({
   //       serializableCheck: false,
   //    });
   // }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;