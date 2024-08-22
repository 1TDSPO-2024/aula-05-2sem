type CabecalhoProps = {
    paginaProps: string; 
    nrpaginaProps: number | string
    statusProps: "loading" | "deployed" | "legal"
    avisoProps: Function;
}

export default function Cabecalho({paginaProps, nrpaginaProps, statusProps, avisoProps}: CabecalhoProps){

    document.title = statusProps+ " - " +nrpaginaProps;

    return(
        <header>
            <h1>{paginaProps + " - " +nrpaginaProps}</h1>
            <div>
                <button onClick={()=> avisoProps()}>Aviso do Pai</button>
            </div>
        </header>
    );
}