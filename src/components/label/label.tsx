import { observer } from 'mobx-react';

// Definizione dei tipi delle props
export interface LabelProps {
  htmlFor: string; // id dell'elemento associato
  text: string; // Testo della label
  className?: string; // Classe CSS opzionale
  rowIndex: number; // rowIndex per identificare la riga
  handleClick: () => void;

}


const Label = observer((props:LabelProps) => {
  return (
    <div className={'label'} key={props.rowIndex}>
      <label  id={'label-' + props.rowIndex.toString()} htmlFor={`label-${props.rowIndex}`} className={props.className}>
        {props.text}
      </label>
    </div>
  );
})
export default Label;




