import {createModel} from "./model.js";import {SquadViewModel} from "./viewmodel.js";import {createView} from "./view.js";
const vm=new SquadViewModel(createModel()),view=createView();
vm.subscribe(state=>{view.render(state.items);view.setSelectedRank(state.items[state.selected].rank);view.log("Binding: View обновлён при уведомлении ViewModel")});
view.onPick(i=>vm.select(i));
view.onSave((i,rank)=>{view.log("View → ViewModel: changeRank");vm.changeRank(i,rank)});
// Здесь реактивность показана явно через subscribe/notify, без Vue/Angular.
