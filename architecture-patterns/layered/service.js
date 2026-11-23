export class SquadService{constructor(repository){this.repository=repository}
 getRoster(){return this.repository.getAll()}
 changeRank(i,rank){if(!rank)throw Error("Звание обязательно");this.repository.saveRank(i,rank)}
}
