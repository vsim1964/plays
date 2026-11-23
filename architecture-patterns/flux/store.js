import {initialState,reducer} from "./model.js";
export function createStore(){let state=initialState;const listeners=[];
 return {getState:()=>state,subscribe(fn){listeners.push(fn);fn(state)},
 dispatch(action){state=reducer(state,action);listeners.forEach(fn=>fn(state))}};
}
