import {cloneSquad} from "./data.js";
// Data Access Layer. Позднее здесь может быть fetch() к API.
export class SquadRepository {constructor(){this.records=cloneSquad()}getAll(){return this.records}saveRank(i,rank){this.records[i].rank=rank}}
