import {MemorySquadAdapter} from "./adapter.js";import {createChangeRankUseCase} from "./usecase.js";import {createView} from "./view.js";
const repository=new MemorySquadAdapter(),changeRank=createChangeRankUseCase(repository),view=createView();
function render(){view.render(repository.getAll());view.setSelectedRank(repository.getAll()[view.getSelected()].rank)}
view.onPick(i=>view.setSelectedRank(repository.getAll()[i].rank));
view.onSave((i,rank)=>{view.log("UI → Use case");changeRank(i,rank);view.log("Use case → Domain → Repository port → Adapter");render()});
render();
