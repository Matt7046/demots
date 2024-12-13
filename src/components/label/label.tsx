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
        style={{ textDecoration }} // Applica dinamicamente lo stile
      >
        {props.text}
      </label>
    </div>
  );
});

export default Label;




