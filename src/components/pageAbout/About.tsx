import React from 'react';
import AboutContent from './AboutContent';
import { useNavigate } from 'react-router-dom';
import Label from '../label/label';
import handleClick from '../label/labelFunc';
import { navigateRouting } from '../../App';

const About: React.FC<any> = ({

}) => {




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

}

export default About;





