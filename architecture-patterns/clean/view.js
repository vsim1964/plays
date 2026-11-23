export function createView() {
 const table = document.querySelector("#fighters");
 const pick = document.querySelector("#person");
 const rank = document.querySelector("#rank");
 const save = document.querySelector("#save");
 const logEl = document.querySelector("#log");
 const fields = ["name","age","draftCity","rank","role"];
 function render(list) {
   table.replaceChildren();
   list.forEach(f => {
     const tr=document.createElement("tr");
     fields.forEach(key=>{const td=document.createElement("td");td.textContent=f[key];tr.append(td)});
     table.append(tr);
   });
   const previous=pick.value;
   pick.replaceChildren();
   list.forEach((f,i)=>{const option=new Option(f.name,String(i));pick.add(option)});
   if(list[Number(previous)])pick.value=previous;
 }
 function log(message){const time=new Date().toLocaleTimeString("ru-RU");logEl.textContent+=time+" · "+message+"\n";logEl.scrollTop=logEl.scrollHeight}
 return {render,log,onSave(handler){save.addEventListener("click",()=>handler(Number(pick.value),rank.value));},
 onPick(handler){pick.addEventListener("change",()=>handler(Number(pick.value)))},
 getSelected:()=>Number(pick.value),setSelectedRank(value){rank.value=value}};
}
