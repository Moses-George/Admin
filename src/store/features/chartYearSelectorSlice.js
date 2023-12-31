import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedYear: 2023
};

export const chartYearSelectorSlice = createSlice({
  name: 'chartYearSelector',
  initialState,
  reducers: {
    setSelectedYear: (state, action) => (state.selectedYear = action.payload)
  }
});

export const { setSelectedYear } = chartYearSelectorSlice.actions;
export default chartYearSelectorSlice.reducer;
