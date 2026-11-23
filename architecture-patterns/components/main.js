import {squad,changeRank} from "./model.js";import {SquadTable} from "./components.js";
const tbody=document.querySelector("#fighters"),pick=document.querySelector("#person"),rank=document.querySelector("#rank"),log=document.querySelector("#log");
function render(){SquadTable({fighters:squad,target:tbody});const selected=pick.value;
 pick.replaceChildren(...squad.map((f,i)=>new Option(f.name,i)));if(squad[Number(selected)])pick.value=selected;
 rank.value=squad[Number(pick.value)].rank;log.textContent+="App → SquadTable → FighterRow: компонентный рендер\n"}
pick.addEventListener("change",()=>{rank.value=squad[Number(pick.value)].rank});
document.querySelector("#save").addEventListener("click",()=>{changeRank(Number(pick.value),rank.value);render()});
render();
