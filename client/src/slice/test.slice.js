import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTests = createAsyncThunk(
  "tests/getTests",
  async (inputs, { rejectWithValue }) => {
    try {
      const head = {
        header: {
          Athorization: `Bearer&{token}`,
        },
      };
      const response = await axios.get(
        "http://localhost:4000/api/test",
        inputs,
        head
      );
      console.log("response from get test",response);
      const data = response?.data;
      return data;
    } catch (error) {
      console.log("error", error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const createTests = createAsyncThunk(
  "posts/createPosts",
  async ({name,duration,instructions,totalNumberOfQuestions,totalMarks}, { rejectWithValue }) => {
    // console.log("formdata",(data.getAll('images')));
    try {
      const response = await axios.post(
        "http://localhost:4000/api/test",
        {name,duration,instructions,totalNumberOfQuestions,totalMarks},
        {
          header: {
            'Content-Type': 'multipart/form-data'
          },
        }
      );
      console.log("response from create", response.data);
      return response;
    } catch (error) {
      console.log("error", error.response.data);
      alert("api not hitted");
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const testSlice = createSlice({
  name: "tests",
  initialState: {
    content: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTests.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createTests.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
      console.log(" state", state.success);
    });
    builder.addCase(createTests.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getTests.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getTests.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("State content", state.content)
      state.content = action.payload;
    });
    builder.addCase(getTests.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default testSlice.reducer;
