import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    product_datas:[],
    loading:false,
    error:null,
}

export const fetchProducts = createAsyncThunk("fetchProducts",async()=>{
    const response = await axios.get("https://course-api.com/react-store-products");
    return response.data; 
})

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.product_datas = action.payload;
        });
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = "Error fetching";
        });
    }
});

export default productSlice.reducer;