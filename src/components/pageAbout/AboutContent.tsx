import React from "react";
import "./About.css";
import Label from "../label/label";
import { useLocation, useNavigate } from "react-router-dom";
import subPromiseStore from "../pageSubPromise/store/SubPromiseStore";
import handleClick from "../label/labelFunc";
import { navigateRouting } from "../../App";


const AboutContent: React.FC<any> = ({
  handleClickButton,
  handleClickRow,

}) => {



  const location = useLocation();
  const { identificativo } = location.state || {}; // Ottieni il valore dallo stato

  const navigate = useNavigate(); // Ottieni la funzione di navigazione

  const labelText = subPromiseStore.nome[identificativo];

  return (
    <>
      <div>
      <div id={`returnHome`} style={{ gridColumn: 'span 12', textAlign: 'left' }}  >
        <Label  text='home' handleClick={() => navigateRouting(navigate,0,'')} identificativo={+('0')} isUnderlined = {true}  />
      </div>

        <div id={`rowHidden-${identificativo}`} style={{ gridColumn: 'span 12', textAlign: 'left' }}  >
          <Label identificativo={identificativo}  text={labelText}   handleClick={() => handleClick()}
           />
        </div>
      </div>
    </>
  );
};



// Componente che visualizza il testo dallo store


export default AboutContent;
