export class SquadPresenter {
 constructor(model,view){this.model=model;this.view=view;
 view.onSave((i,rank)=>this.changeRank(i,rank));
 view.onPick(i=>view.setSelectedRank(this.model.getAll()[i].rank));this.show()}
 changeRank(i,rank){this.view.log("Presenter: получил событие от пассивного View");this.model.setRank(i,rank);this.view.log("Presenter: обновил Model");this.show()}
 show(){this.view.render(this.model.getAll());this.view.setSelectedRank(this.model.getAll()[this.view.getSelected()].rank);this.view.log("Presenter: приказал View отобразить данные")}
}
