import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createExampleAsync } from "./example.actions";

interface ExampleState {
   name: string | null;
   surname: string | null;
}

const initialState: ExampleState = {
   name: "name",
   surname: "surname"
};

const exampleSlice = createSlice({
   name: "exampleSlice",
   initialState,
   reducers: {
      setName: (state, action: PayloadAction<string>) => {
         state.name = action.payload;
      },
      removeName: (state) => {
         state.name = null;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(createExampleAsync.pending, (state) => {
            console.log(state);
         })
         .addCase(createExampleAsync.fulfilled, (state) => {
            console.log(state);
         })
         .addCase(createExampleAsync.rejected, (state) => {
            console.log(state);
         })
   }
});

export const { reducer: exampleReducer, actions: exampleActions} = exampleSlice;