import {WriteModel} from "./write-model.js";import {ReadModel} from "./read-model.js";import {createView} from "./view.js";
const write=new WriteModel(),read=new ReadModel(),view=createView();
function show(){view.render(read.queryRoster());view.setSelectedRank(read.queryRoster()[view.getSelected()].rank)}
read.project(write.snapshot());show();
view.onPick(i=>view.setSelectedRank(read.queryRoster()[i].rank));
view.onSave((index,rank)=>{view.log("Command → WriteModel: ChangeRank");
 const snapshot=write.execute({type:"ChangeRank",index,rank});read.project(snapshot);
 view.log("Projection → ReadModel; Query → View");show()});
// CQRS показан на одной странице; в крупных системах проекция может обновляться асинхронно.
