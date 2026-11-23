import {cloneSquad} from "./data.js";
export class WriteModel{constructor(){this.records=cloneSquad()}
 execute(command){if(command.type!=="ChangeRank")throw Error("Неизвестная команда");
 this.records[command.index]={...this.records[command.index],rank:command.rank};
 return this.records.map(x=>({...x}))}
 snapshot(){return this.records.map(x=>({...x}))}
}
