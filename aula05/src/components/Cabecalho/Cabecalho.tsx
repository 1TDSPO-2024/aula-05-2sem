import { Cabecalho1Props } from "../../types";
import { Cabecalho2Props } from "../../types";

export default function Cabecalho(props:Cabecalho1Props & Cabecalho2Props ){
    
    document.title = props.statusProps + " - " + props.nrPaginaProps;

    return(
        <div>
            <h1>{props.statusProps + " - " + props.nrPaginaProps}</h1>
            <div>
                <button onClick={() => props.avisoProps()}>Aviso do Pai</button>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}