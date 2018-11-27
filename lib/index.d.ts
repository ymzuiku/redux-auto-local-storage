interface IStorage {
  save: (obj:any, key?:string)=>void;
  load: (key:string)=>any;
  clear: (key:string)=>any;
}


export default function reduxAutoLocalStorage(store:any, localName:string, stateKeys:Array<any>): void;
export const storage:IStorage;
