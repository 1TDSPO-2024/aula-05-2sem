import { Cabecalho1Props, Cabecalho2Props } from "../../types"; 
 
export default function Cabecalho({ paginaProps, nrPaginaProps, statusProps,
    avisoProps, children }: Cabecalho1Props & Cabecalho2Props) {
 
    document.title = statusProps + " - " + nrPaginaProps;
 
 
 
    return (
        <header>
            <h1>{paginaProps + " - " + nrPaginaProps}</h1>
            <div>
                <button onClick={() => avisoProps()}>Aviso do Pai</button>
            </div>
            <div>
                {children}
            </div>
        </header>
    )
}
 