import {cloneSquad} from "./data.js";
export class SquadModel{constructor(){this.items=cloneSquad()}getAll(){return this.items}setRank(i,rank){this.items[i].rank=rank}}
