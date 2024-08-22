type Cabecalho1Props = {
    paginaProps: string; 
    nrpaginaProps: number | string
    children:React.ReactNode
}
type Cabecalho2Props = {
    statusProps: "loading" | "deployed" | "legal"
    avisoProps: Function;
}

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