import {cloneSquad} from "./data.js";
export class SquadModel {
 constructor(){this.squad=cloneSquad()}
 all(){return this.squad}
 changeRank(index,rank){this.squad[index].rank=rank}
}
