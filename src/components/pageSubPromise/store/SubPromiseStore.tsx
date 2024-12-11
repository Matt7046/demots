import { observer } from 'mobx-react';
import BaseStore from '../../general/BaseStore';

export class SubPromiseStore extends BaseStore {
  

  nome: string[];
  testo: string[];

  constructor() {
    super(); // Inizializza la classe base
    this.nome = [];
    this.testo =[];

   // this.testo =[' ',' ',' '];
  }

  

  setNome(rowIndex:number, nome: string) {
    this.nome[rowIndex] = nome;
  }


  setTesto(rowIndex:number, testo: string) {
    this.testo[rowIndex] = testo;
  }

  getStore() {
    return this;
  }
}
const subPromiseStore = new SubPromiseStore();
export default subPromiseStore;





