import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userInfo:null,
}
export const storeSlice = createSlice({
    name:'none',
    initialState,
    reducers:{
        addUser: (state, action) => {
            state.userInfo = action.payload
        }
    }
})
export const {addUser}= storeSlice.actions;

export default storeSlice.reducer;