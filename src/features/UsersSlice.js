import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';

const fetchUsers = createAsyncThunk(
    "users/fetchUsers", ()=>{
return fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>res.json())
.then(data => data)
})

const initialState={
    loading :false ,
    users :[] , 
    error:""
}

const userSlice=createSlice({
    name :"users",
    initialState,
    extraReducers : builder =>{
     builder.addCase(fetchUsers.pending , state =>{
        state.loading =true;
     })
     builder.addCase(fetchUsers.fulfilled , (state , action)=>{
        state.loading=false ;
        state.users =action.payload ;
        state.error = "";
     })
     builder.addCase(fetchUsers.rejected , (state , action)=>{
        state.loading =false ;
        state.users = [] ;
        state.error =action.error.message;

     })
    },
})

export default userSlice.reducer
export { fetchUsers}