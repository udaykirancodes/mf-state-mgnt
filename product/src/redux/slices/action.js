import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getUserData = createAsyncThunk("postTodo", async (title) => {
  const res = await axios.get(
    "https://mocki.io/v1/c3f764c0-0d34-40c4-81b4-545dc127e109"
  );
  return res.data;
});

export { getUserData };
