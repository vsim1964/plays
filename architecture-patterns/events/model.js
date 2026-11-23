import {cloneSquad} from "./data.js";
export function connectModel(bus){const squad=cloneSquad();
 bus.on("rank:requested",({index,rank})=>{squad[index].rank=rank;bus.emit("squad:changed",squad)});
 bus.emit("squad:changed",squad);
 return squad;
}
