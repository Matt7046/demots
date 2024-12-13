import React, { useEffect, useState } from 'react';
import SubPromiseContent from './SubPromiseContent';
import { ascoltatore } from './SubPromiseFunc';
import subPromiseStore from './store/SubPromiseStore';
import { fetchData } from './service/SubPromiseService';


const SubPromise: React.FC<any> = ({ }) => {

  const [rows, setRows] = useState<number>(9); // Stato iniziale vuoto
  const [response, setResponse] = useState<any>({}); // Stato iniziale vuoto

  const [visibiityButton, setVisibilityButton] = useState<boolean>(false); // Stato iniziale vuoto

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
  }, []); // Il secondo argomento vuoto ind ica che l'effetto dipenderà solo dal mount

  const componentDidMount = () => {
    if (!hasFetchedData) {
      hasFetchedData = true;
      // Effettua la chiamata GET quando il componente è montato 
      // axios.
      //  .get('https://api.example.com/data') // URL dell'API]
      fetchData()
        .then((response) => {
          if (response) {
            setResponse(response)
            const rows = Array.from({ length: response.testo.length }, (_, i) => i + 1); // Genera un array dinamico
            setRows(response.testo.length);
            caricamentoIniziale(response, rows);
          }

        })
        .catch((error) => {
          console.error('Errore durante il recupero dei dati:', error);
        });
    }
  }


  const aggiornaDOMComponente = (dimension: number, responseNome: string[]): any => {
    if (responseNome) {
      for (let index = 0; index < responseNome.length; index++) {
        if (dimension !== 0)
          ascoltatore(responseNome[index], "displayer-" + index.toString());
      }
      setVisibilityButton(true);
    }
  }




  const caricamentoIniziale = (response: any, rows: number[]): any => {
    const nome = response.testo.map((x: { nome: any; }) => x.nome);
    return setAllNome(nome, rows)
  }

  const setNomeByIndex = (response: any, index: number) => {
    subPromiseStore.setNome(index, response);
    return ascoltatore(response, "displayer-" + index.toString())
  }

  const setAllNome = (responseNome: any, dimension: number[]) => {
    subPromiseStore.setAllNome(responseNome);
    aggiornaDOMComponente(dimension.length, responseNome);

  }



  // Dati per generare i componenti dinamicamente


  //if (lengthRow.length === 0) {
  //  return <div>Caricamento in corso...</div>; // Indicatore di caricamento  }
  //}
  return (
    <>
      {Array.from({ length: rows }, (_, rowIndex) => (<SubPromiseContent
        key={rowIndex} // Chiave univoca per ogni elemento
        rowIndex={rowIndex}
        visibiityButton ={visibiityButton}
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













