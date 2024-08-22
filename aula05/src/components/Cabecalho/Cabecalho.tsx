import { Cabecalho1Props, Cabecalho2Props } from "../../types";

export default function Cabecalho({paginaProps, nrpaginaProps, statusProps, avisoProps, children }: Cabecalho1Props & Cabecalho2Props){

    document.title = statusProps+ " - " +nrpaginaProps;

    return(
        <header>
            <h1>{paginaProps + " - " +nrpaginaProps}</h1>
            <div>
                <button onClick={()=> avisoProps()}>Aviso do Pai</button>
            </div>
            <div>
                {children}
            </div>
        </header>
    );
}