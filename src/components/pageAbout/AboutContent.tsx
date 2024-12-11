import React from "react";
import "./About.css";
import Label from "../label/label";
import { useLocation } from "react-router-dom";
import subPromiseStore from "../pageSubPromise/store/SubPromiseStore";
import handleClick from "../label/labelFunc";


const AboutContent: React.FC<any> = ({
  handleClickButton,
  handleClickRow,

}) => {



  const location = useLocation();
  const { rowIndex } = location.state || {}; // Ottieni il valore dallo stato


  const labelText = subPromiseStore.nome[rowIndex];

  return (
    <>
      <div>
        <div id={`rowHidden-${rowIndex}`} style={{ gridColumn: 'span 12', textAlign: 'left' }}  >
          <Label rowIndex={rowIndex} htmlFor="username" text={labelText}   handleClick={() => handleClick()}
           />
        </div>
      </div>
    </>
  );
};



// Componente che visualizza il testo dallo store


export default AboutContent;
