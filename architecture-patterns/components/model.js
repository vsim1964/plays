import {cloneSquad} from "./data.js";export let squad=cloneSquad();
export function changeRank(index,rank){squad=squad.map((f,i)=>i===index?{...f,rank}:f)}
