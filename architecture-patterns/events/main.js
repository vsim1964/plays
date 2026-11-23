import {createBus} from "./bus.js";import {connectModel} from "./model.js";import {createView} from "./view.js";
const bus=createBus(),view=createView();
let latest=[];
bus.on("squad:changed",squad=>{latest=squad;view.render(squad);view.setSelectedRank(squad[view.getSelected()].rank);view.log("Event squad:changed → View")});
view.onPick(i=>view.setSelectedRank(latest[i].rank));
view.onSave((index,rank)=>{view.log("View публикует rank:requested");bus.emit("rank:requested",{index,rank})});
connectModel(bus);
