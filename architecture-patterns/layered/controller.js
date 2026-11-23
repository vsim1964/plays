export class SquadController{constructor(service,view){this.service=service;this.view=view;
 view.onSave((i,rank)=>{view.log("Controller → Service");service.changeRank(i,rank);view.log("Service → Repository: запись");this.show()});
 view.onPick(i=>view.setSelectedRank(service.getRoster()[i].rank));this.show()}
 show(){this.view.render(this.service.getRoster());this.view.setSelectedRank(this.service.getRoster()[this.view.getSelected()].rank);this.view.log("Controller → View")}}
