import {cloneSquad} from "./data.js";
// Внешний адаптер для порта Repository.
export class MemorySquadAdapter{constructor(){this.items=cloneSquad()}getAll(){return this.items}save(i,updated){this.items[i]=updated}}
