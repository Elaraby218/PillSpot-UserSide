import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

// interface Pharmacy {
//   id: string;
//   name: string;
//   location: string;
// }

interface PharmacyState {
  list:[];
  loading: boolean;
  error: string | null;
}

const initialState: PharmacyState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchUserPharmacies = createAsyncThunk("pharmacies/fetchUserPharmacies", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`https://localhost:7298/api/pharmacy-employees/pharmacies`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

const getUserPharmacySlice = createSlice({
  name: "getUserPharmacies",
  initialState,
  reducers: {
    clearPharmacies: (state) => {
      state.list = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPharmacies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserPharmacies.fulfilled,
        (state, action) => {
          state.loading = false;
          state.list = action.payload;
        }
      )
      .addCase(fetchUserPharmacies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Unknown error";
      });
  },
});

export const { clearPharmacies } = getUserPharmacySlice.actions;
export default getUserPharmacySlice.reducer;
