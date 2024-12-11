import { getData } from '../../general/AxiosService';

export const fetchData = async () => {
  try {
    const data = await getData('/subPromise/testo'); // Endpoint dell'API
    console.log('Dati ricevuti:', data);
    return data;
  } catch (error) {
    console.error('Errore durante il recupero dei dati:', error);
  }
}


export const fetchSubPromiseById = async (rowIndex:number) => {
  try {
    const path = `/subPromise/${rowIndex}`;
    const data = await getData(path); // Endpoint dell'API
    console.log('Dati ricevuti:', data);
    return data;
  } catch (error) {
    console.error('Errore durante il recupero dei dati:', error);
  }
};

;
