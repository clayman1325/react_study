import { createStore} from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const intialState = {
  value: 0,
  showCounter: true
}
const authInitialState = {
  isAuth: false
}
const authSlice = createSlice({
  name:"auth",
  authInitialState,
  reducers: {
    login() {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    }
  }
})
const counterSlice = createSlice({
  name: "counter", 
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter += action.payload
    },
    toogleCounter() {}
  }
})
// const counterReducer = (state=intialState, actions) => {
//   if(actions.type == "increment") {
//     return {
//       value: state.value + 1,
//       showCounter: state.showCounter
//     }
//   }

//   if(actions.type == 'decrement'){
//     return {
//       value: state.value - 1,
//       showCounter: state.showCounter
//     }
//   }
//   if(actions.type == "increase") {
//     return {
//       value: state.value + actions.increment,
//       showCounter: state.showCounter
//     }
//   }
//   if(actions.type == "toggle") {
//     console.log("hola")
//     return {
//       value: state.value,
//       showCounter: !state.showCounter
//     }
//   }
//   return state;
// }

// const store = createStore(counterReducer)

//  const store = configureStore({
//   reducer: counterSlice.reducer
//  })

 const store = configureStore({
  reducer: {
    auth:    authSlice.reducer,
    counter: counterSlice.reducer
  }
})
export const counterActions = counterSlice.actions;
export const authActions    = authSlice.actions;
export default store;