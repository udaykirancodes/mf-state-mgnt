import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getUserData = createAsyncThunk("postTodo", async (title) => {
  const res = await axios.get(
    "https://mocki.io/v1/5564c855-1687-409b-b1c4-5bfd30be988f"
  );
  console.log("From backend main : ", res.data);
  return res.data;
});

export { getUserData };
