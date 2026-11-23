// Компонент строки принимает бойца и возвращает DOM-элемент.
export function FighterRow({fighter}){const tr=document.createElement("tr");
 for(const key of ["name","age","draftCity","rank","role"]){const td=document.createElement("td");td.textContent=fighter[key];tr.append(td)}
 return tr}
export function SquadTable({fighters,target}){target.replaceChildren(...fighters.map(fighter=>FighterRow({fighter})))}
