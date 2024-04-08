import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const questionTestAction = "comment/questionUser";
const getQuestionTestAction = "getComment/commentUser";

export const questionTest = createAsyncThunk(
  questionTestAction,
  async (data, { rejectWithValue, getState }) => {
    try {
      const body = {
        name: data.name,
        correctOption: data.correctOption,
        option1: data.option1,
        option2: data.option2,
        option3: data.option3,
        option4: data.option4,
        marks: data.marks,

        testId: data.testId,
      };
      console.log(body, "bodyertyt5y56y54y");
      const token = getState().auth.token;

      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `http://localhost:4000/api/question/${data.testId}`,
        body,
        header
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getQuestions = createAsyncThunk(
  getQuestionTestAction,
  async (testId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/question/${testId}`
      );
      console.log("rewrewr questions", res);

      return { testId, res };
    } catch (error) {
      console.log("errorrmg", error);
      // }

      return rejectWithValue(error.response.data);
    }
  }
);

export const questionSlice = createSlice({
  name: "questions",
  initialState: {
    content: {},
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(questionTest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(questionTest.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        console.log(" state", state.success);
      })
      .addCase(questionTest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("error", state.error);
      })
      .addCase(getQuestions.pending, (state) => {
        state.loading = false;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.content = action.payload;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default questionSlice.reducer;
