interface IStorage {
  save: (obj:any, key?:string)=>void;
  load: (key:string)=>any;
  clear: (key:string)=>any;
}


declare function autoStorageSave(store:any, localName:string, stateKeys:Array<any>): void;
export const storage:IStorage;
