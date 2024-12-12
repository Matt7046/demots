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
    const nome = response ? response.testo[0].nome : null;
    return handleClickButtonNome(0, nome).then((value: any) => {
      if (value !== "GET") {
        handleClickButtonNome(1, response.testo[1].nome);
        return handleClickButtonNome(2, response.testo[2].nome);
      }
      return new Promise((myResolve, myReject) => "DATA")
    })
  }

  const handleClickButtonNome = (index: number, response: any) => {
    if (!response) {
      return fetchData().then((response: any) => {
        return caricamentoIniziale(response).then((response: any) => "GET");

      })

    }
    else {
      subPromiseStore.setNome(index, response);
      return ascoltatore(response, "displayer-" + index.toString()).then((value: any) => {
        return "DATA";
      })

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













