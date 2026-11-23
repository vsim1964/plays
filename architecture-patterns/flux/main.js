import {createStore} from "./store.js";import {createView} from "./view.js";
const store=createStore(),view=createView();
store.subscribe(state=>{view.render(state.squad);view.setSelectedRank(state.squad[view.getSelected()].rank);view.log("Store → View: новое состояние")});
view.onPick(i=>view.setSelectedRank(store.getState().squad[i].rank));
view.onSave((index,rank)=>{view.log("Action: CHANGE_RANK");store.dispatch({type:"CHANGE_RANK",index,rank})});
