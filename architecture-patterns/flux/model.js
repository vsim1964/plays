import {cloneSquad} from "./data.js";export const initialState={squad:cloneSquad()};
export function reducer(state,action){
 if(action.type==="CHANGE_RANK")return {squad:state.squad.map((f,i)=>i===action.index?{...f,rank:action.rank}:f)};
 return state
}
