import { observer } from 'mobx-react';


interface LabelProps {
  identificativo: number | string;
  text: string;
  className?: string;
  handleClick: () => void;
  isUnderlined?: boolean; // Proprietà opzionale per la sottolineatura
}

const Label = observer((props: LabelProps) => {
  const textDecoration = props.isUnderlined ? "underline" : "none";

  return (
    <div className="label" key={props.identificativo}>
      <label
        id={`label-${props.identificativo}`}
        htmlFor={`label-${props.identificativo}`}
        className={props.className}
        onClick={props.handleClick}
        style={{
          textOverflow: 'ellipsis', // Mostra i puntini
          whiteSpace: 'nowrap', // Impedisce l'andata a capo
          overflow: 'hidden', // Nasconde il contenuto extra
          display: 'inline-block', // Per applicare ellipsis correttamente
          maxWidth: '100%', // Imposta una larghezza massima
          textDecoration
        }}
      >
        {props.text}
      </label>
    </div>
  );
});

export default Label;




