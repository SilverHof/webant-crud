import { createAppThunk } from "../hooks/createAppThunk";

export const createExampleAsync = createAppThunk(
   "example/createExample",
   async ({ username, email }: { username: string; email: string }, { rejectWithValue }) => {
      setTimeout(() => {
         console.log(username, email);
      }, 3000);
   }
);
