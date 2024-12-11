import React from "react";
import { observer } from "mobx-react";
import subPromiseStore from "./store/SubPromiseStore";  // Importa lo store
import "./SubPromiseContent.css";
import Label from "../label/label";
import { useNavigate } from "react-router-dom";
import { fetchSubPromiseById } from "./service/SubPromiseService";
import NomeDisplay from "../nomeDisplay/NomeDisplay";
import handleClick from "../label/labelFunc";
import { ascoltatore } from "./SubPromiseFunc";


const SubPromiseContent: React.FC<any> = ({
  rowIndex,
}) => {

  const toggleVisibility = (rowIndex:number) => {
    const element = document.querySelector(`#rowHidden-${rowIndex}`) as HTMLElement;
    const check = element.style.visibility === "hidden";
     // Rimuove il valore inline
    if(check)
    {
      element.style.visibility = ""; // Rimuove il valore inline

    }else{
      element.style.visibility = "hidden"; // Rimuove il valore inline

    }
    
    if (check) {
        handleClickMostraLabel(rowIndex)
      }
      return check; // Aggiorna lo stato
    ;


    

  };


  const [labelText] = React.useState('Nessun dato aggiuntivo'); // Stato dinamico per il testo della label

  const handleClickMostraLabel = (rowIndex: number) => {

  return  fetchSubPromiseById(rowIndex).then((response) => {
subPromiseStore.setTesto(rowIndex, response.testo.testo);
      //  setLabelText(subPromiseStore.testo[rowIndex]);
      return ascoltatore(response.testo.testo, "label-" + rowIndex.toString())
    })

  }




  const navigate = useNavigate(); // Ottieni la funzione di navigazione

  const handleClickButtonLink = (rowIndex: any) => {
    navigate('/about', { state: { rowIndex } }); // Passa il parametro come stato
  }


  function clickRowNome(rowIndex: any): void {
  }

  return (
    <>
      <div className={`row`}>
        <div className="col-display" style={{ gridColumn: 'span 10' }}>
          <NomeDisplay
            rowIndex={rowIndex}
            handleClick={() => clickRowNome(rowIndex)}
            key={0}
          />
        </div>
        <div className="col-button" style={{ gridColumn: 'span 1' }}>
          <input
            type="button"
            id={`button-${rowIndex}`} // ID univoco
            className="button"
            value="Testo"
            onClick={() =>  toggleVisibility(rowIndex)    }
          />
        </div>
        <div className="col-button-link" style={{ gridColumn: 'span 1' }}>
          <input
            type="button"
            className="button-blue"
            id={`button-link-${rowIndex}`} // ID univoco
            value="Dettaglio"
            onClick={() => {
              handleClickButtonLink(rowIndex);
            }}
          />
        </div>
        <div id={`rowHidden-${rowIndex}`} style={{ gridColumn: 'span 10', textAlign: 'left',

          visibility:'hidden'
         }}  >
          <Label rowIndex={rowIndex} htmlFor="" text={labelText} handleClick={() => handleClick()} />
        </div>
      </div>

    </>
  );
};

function toggleRowHeigth() {
  const row = document.querySelector('.label');
  row!.classList.toggle('row-height-hidden');
}






export default SubPromiseContent;
