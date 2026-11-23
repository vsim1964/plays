export class SquadController {
 constructor(model,view){this.model=model;this.view=view;
 view.onSave((i,rank)=>{view.log("Controller: принял команду");model.changeRank(i,rank);view.log("Model: данные изменены");this.refresh()});
 view.onPick(i=>view.setSelectedRank(model.all()[i].rank));
 this.refresh()}
 refresh(){this.view.render(this.model.all());this.view.setSelectedRank(this.model.all()[this.view.getSelected()].rank);this.view.log("View: таблица перестроена")}
}
