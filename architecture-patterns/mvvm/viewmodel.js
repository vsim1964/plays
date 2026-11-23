export class SquadViewModel {
 constructor(items){this.listeners=[];this.state={items,selected:0};}
 subscribe(listener){this.listeners.push(listener);listener(this.state)}
 notify(){this.listeners.forEach(fn=>fn(this.state))}
 select(index){this.state.selected=index;this.notify()}
 changeRank(index,rank){this.state.items[index].rank=rank;this.notify()}
}
