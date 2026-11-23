// Простейшая шина событий: подписка и публикация.
export function createBus(){const channels=new Map();
 return {on(name,handler){const list=channels.get(name)||[];list.push(handler);channels.set(name,list)},
 emit(name,data){(channels.get(name)||[]).forEach(handler=>handler(data))}}}
