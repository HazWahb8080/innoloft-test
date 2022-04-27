import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
  name: 'configs',
  initialState: {
    Configsdata:[],
  },
  reducers: { 
      ConfigsData : (state,action) => { 
          state.Configsdata = [action.payload]
          console.log(state.Configsdata)
      },
    
  },
})
// actions
export const {ConfigsData} = configSlice.actions;
//selectors
export const selectConfigsData = (state) => state.configs.Configsdata;

export default configSlice.reducer;