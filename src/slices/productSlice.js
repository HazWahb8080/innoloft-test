import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data:[],
  },
  reducers: { 
      updateProductData : (state,action) => { 
          state.data = [action.payload]
      },
      updateProductDesc : (state,action) => { 
        state.data[0].Data.description = action.payload;
      },
      updateProductCats : (state,action) => { 
        state.data[0].Data.categories[action.payload.id].name = action.payload.value;
      },
      
      updateProductBms : (state,action) => { 
        state.data[0].Data.businessModels[action.payload.id].name = action.payload.value;
      },
      updateProductTrl : (state,action) => { 
        state.data[0].Data.trl.name = action.payload;
      },
  },
})
// actions
export const { updateProductData , updateProductDesc 
  ,updateProductCats,updateProductBms,updateProductTrl} = productSlice.actions;
//selectors
export const selectData = (state) => state.product.data;

export default productSlice.reducer;