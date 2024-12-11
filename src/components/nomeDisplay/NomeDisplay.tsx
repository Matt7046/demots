import { observer } from 'mobx-react';
import subPromiseStore from '../pageSubPromise/store/SubPromiseStore';


const NomeDisplay = observer((props: {
  key: number;
  rowIndex: number; handleClick: () => void
}) => {
  return (
    <h1 id={'displayer-' + props.rowIndex.toString()} onClick={props.handleClick}>
      {subPromiseStore.testo[props.rowIndex]} {/* Mostra il testo dallo store */}
    </h1>
  );
})
export default NomeDisplay;
