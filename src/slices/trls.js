import { createSlice } from '@reduxjs/toolkit'

export const trlSlice = createSlice({
  name: 'trls',
  initialState: {
    trldata:[],
  },
  reducers: { 
      updateTrlsData : (state,action) => { 
          state.trldata = [action.payload]
      },
    
  },
})
// actions
export const { updateTrlsData} = trlSlice.actions;
//selectors
export const selectTrlData = (state) => state.trls.trldata;

export default trlSlice.reducer;