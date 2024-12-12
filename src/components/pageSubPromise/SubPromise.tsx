import React, { useEffect } from 'react';
import SubPromiseContent from './SubPromiseContent';
import { ascoltatore } from './SubPromiseFunc';
import subPromiseStore from './store/SubPromiseStore';
import { fetchData } from './service/SubPromiseService';


const SubPromise: React.FC<any> = ({ }) => {


  // default class SubPromise extends React.Component {

  let hasFetchedData = false;

  const handleClickButton = (rowIndex: number, testoRow?: string) => {

    console.log('il valore dello stato testo e ', subPromiseStore.testo)
  };

  useEffect(() => {
    // Questo codice verrà eseguito dopo che il componente è stato montato
    componentDidMount();
    //window.addEventListener('resize', handleResize);

    // Funzione di cleanup (opzionale)
    return () => {
      //window.removeEventListener('resize', handleResize);
    };
  }, []); // Il secondo argomento vuoto indica che l'effetto dipenderà solo dal mount

  const componentDidMount = () => {
    if (!hasFetchedData) {
      hasFetchedData = true;
      // Effettua la chiamata GET quando il componente è montato 
      // axios.
      //  .get('https://api.example.com/data') // URL dell'API]
      fetchData()
        .then((response) => {
          if (response) {
            const data = response; // Ottieni i dati dalla risposta
            caricamentoIniziale(response);
          }

        })
        .catch((error) => {
          console.error('Errore durante il recupero dei dati:', error);
        });
    }
  }



  const caricamentoIniziale = (response: any): any => {
    const nome = response.testo.map((x: { nome: any; })=> x.nome);
    return setAllNome(nome, 3)
  }

  const setNomeByIndex = (response: any, index: number) => {
    subPromiseStore.setNome(index, response);
    return ascoltatore(response, "displayer-" + index.toString())
  }

  const setAllNome = (responseNome: any, dimension: number) => {
    subPromiseStore.setAllNome(dimension, responseNome);
    for (let index = 0; index < dimension; index++) {
      ascoltatore(responseNome[index], "displayer-" + index.toString());
    }

  }

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
export default SubPromise;



export interface SubPromiseProps {
  nomeProps: string;
  children?: React.ReactNode;  // Aggiungi 'children' opzionale

}

export interface SubPromiseState {
  nome: string; // Definisci lo stato per 'nome'
  testo: string;
}













