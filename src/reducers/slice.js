import {createSlice} from '@reduxjs/toolkit'
const counterSlice = createSlice({
   name:'counterSlice',
   initialState:{counter:0},
   reducers:{
    plus(state, action){
      console.log('action is ', action)
      state.counter = state.counter+ action.payload;
      console.log('plus call')
    },
    minus(state,action){
      state.counter = (state.counter>0)?(state.counter-action.payload):0;
      console.log('minus call');
    }
   }
})
export const {plus,minus} = counterSlice.actions;
export default counterSlice.reducer;  //consume by store