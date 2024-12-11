import React from 'react';
import SubPromiseContent from './SubPromiseContent';
import { ascoltatore } from './SubPromiseFunc';
import subPromiseStore from './store/SubPromiseStore';
import axios from 'axios';
import { fetchData } from './service/SubPromiseService';


export default class SubPromise extends React.Component {

  hasFetchedData = false;

  handleClickButton = (rowIndex: number, testoRow?: string) => { //   const NuovoNome ='TOPOLINOTOPOLINOTOPOLINOTOPOLINO'
    // ascoltatore(subPromiseStore.getStore().nome[rowIndex], `rowHidden-${rowIndex}`).then((value: any) => { // Chiama la funzione importata
    // const nome = this.state.nome
    //   subPromiseStore.setNome(rowIndex, NuovoNome);
    //const NuovoTesto ='PLUTO'


    //  ascoltatore(response.testo.testo , rowIndex.toString()).then((value: any) => { // Chiama la funzione importata

    //ascoltatore(subPromiseStore.getStore().testo[rowIndex],rowIndex.toString()).then((value: any) => { // Chiama la funzione importata
    // const nome = this.state.nome

    console.log('il valore dello stato testo e ', subPromiseStore.testo)
    // })
    // })

    //  })
  };

  componentDidMount() {
    if (!this.hasFetchedData) {
      this.hasFetchedData = true;
      // Effettua la chiamata GET quando il componente è montato 
      // axios.
      //  .get('https://api.example.com/data') // URL dell'API]
      fetchData()
        .then((response) => {
          if (response) {
            const data = response; // Ottieni i dati dalla risposta
            this.caricamentoIniziale(response);
          }

        })
        .catch((error) => {
          console.error('Errore durante il recupero dei dati:', error);
        });
    }
  }

  caricamentoIniziale(response: any): Promise<any> {
    const nome = response ? response.testo[0].nome : null;
    return this.handleClickButtonNome(0, nome).then((value: any) => {
      if (value !== "GET") {
        this.handleClickButtonNome(1, response.testo[1].nome);
        return this.handleClickButtonNome(2, response.testo[2].nome);
      }
      return new Promise((myResolve, myReject) => "DATA")
    })
  }



  handleClickButtonNome(index: number, response: any) {
    if (!response) {
      return fetchData().then((response: any) => {
        return this.caricamentoIniziale(response).then((response: any) => "GET");

      })

    }
    else {
      subPromiseStore.setNome(index, response);
      return ascoltatore(response, "displayer-" + index.toString()).then((value: any) => {
        return "DATA";
      })

    }

  }



  //handleClickRow = (rowIndex: number,testoRow?: string) => {

  //  ascoltatore(subPromiseStore.getStore().testo[rowIndex],rowIndex.toString()).then((value: any) => { // Chiama la funzione importata
  // const nome = this.state.nome

  //  console.log('il valore dello stato testo e ', subPromiseStore.testo)

  //    })
  //};




  render() {
    console.log("topolino");

    // Dati per generare i componenti dinamicamente
    const rows = [0, 1, 2];

    return (
      <>
        {rows.map((rowIndex) => (
          <SubPromiseContent
            key={rowIndex} // Chiave univoca per ogni elemento
            rowIndex={rowIndex}
          />
        ))}
      </>
    );
  }
}


export interface SubPromiseProps {
  nomeProps: string;
  children?: React.ReactNode;  // Aggiungi 'children' opzionale

}

export interface SubPromiseState {
  nome: string; // Definisci lo stato per 'nome'
  testo: string;
}


