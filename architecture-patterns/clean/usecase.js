import {promote} from "./domain.js";
// Use case зависит от абстракции порта, а не от DOM.
export function createChangeRankUseCase(repository){
 return (index,rank)=>{const fighter=repository.getAll()[index];repository.save(index,promote(fighter,rank))}}
