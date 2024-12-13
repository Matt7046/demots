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
import { navigateRouting } from "../../App";




const SubPromiseContent: React.FC<any> = ({
  rowIndex,
  visibiityButton // Proprietà opzionale per la sottolineatura

}) => {
  const navigate = useNavigate(); // Ottieni la funzione di navigazione


  const toggleVisibility = (rowIndex: number) => {
    const element = document.querySelector(`#rowHidden-${rowIndex}`) as HTMLElement;
    const check = element.style.visibility === "hidden";
    // Rimuove il valore inline
    if (check) {
      element.style.visibility = ""; // Rimuove il valore inline

    } else {
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

    return fetchSubPromiseById(rowIndex).then((response) => {
      subPromiseStore.setTesto(rowIndex, response.testo.testo);
      //  setLabelText(subPromiseStore.testo[rowIndex]);
      return ascoltatore(response.testo.testo, "label-" + rowIndex.toString())
    })

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

        <div
          className="col-button-container"
          style={{
            gridColumn: 'span 2', // Unisce le colonne 11 e 12
            display: 'flex', // Utilizza il grid per disporre i pulsanti
            gridTemplateColumns: '2fr 1fr', // Due colonne uguali
            gap: '1px', // Distanza tra i pulsanti
            visibility: visibiityButton ? 'visible' : 'hidden',
          }}
        >
          <div className="col-button">
            <button
              id="button-red"
              className="button-red"
              title="Carica sottotesto"  /* Tooltip nativo */

              onClick={() => toggleVisibility(rowIndex)} >
                
              <i className="fas fa-download" style={{ marginRight: '5px' }}></i> {/* Icona */}
             {/* Testo accanto all'icona */}
            </button>
          </div>

          <div className="col-button-link">
            <button
              type="button"
              className="button-blue"
              id='button-blue'
              title="Vai alla pagina dei dettagli"  /* Tooltip nativo */

              onClick={() => navigateRouting(navigate, rowIndex, 'about')}>
              <i className="fas fa-eye" style={{ marginRight: '5px' }}></i> {/* Icona */}
               {/* Testo accanto all'icona */}
            </button>
          </div>
        </div>

        <div id={`rowHidden-${rowIndex}`} style={{
          gridColumn: 'span 10', textAlign: 'left',

          visibility: 'hidden'
        }}  >
          <Label identificativo={rowIndex} text={labelText} handleClick={() => handleClick()} />
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
