import React from 'react';
import AboutContent from './AboutContent';

export default class About extends React.Component {


  

   render() {
    console.log("topolino");
  
    // Dati per generare i componenti dinamicamente
    const rows = [0];
  
    return (
      <>
        {rows.map((rowIndex) => (
          <AboutContent 
            key={rowIndex} // Chiave univoca per ogni elemento
            rowIndex={rowIndex}                
          />
        ))}
      </>
    );
  }}




