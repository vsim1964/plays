// Внутреннее бизнес-правило не знает о браузере и JSON.
export function promote(fighter,newRank){if(!newRank.trim())throw Error("Пустое звание");
 return {...fighter,rank:newRank}}
