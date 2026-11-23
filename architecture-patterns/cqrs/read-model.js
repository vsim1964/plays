// Отдельная проекция для чтения: здесь она синхронна и хранится в памяти.
export class ReadModel{constructor(){this.rows=[]}
 project(snapshot){this.rows=snapshot.map(f=>({...f}))}
 queryRoster(){return this.rows}
}
