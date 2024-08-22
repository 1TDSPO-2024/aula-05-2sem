type CabecalhoProps = {
    tituloProps: string;
    avisoProps: Function;
}

export default function Cabecalho({tituloProps, avisoProps}: CabecalhoProps) {

    document.title = tituloProps;

    return(
        <header>
            <h1>{tituloProps}</h1>
            <div>
                <button onClick={() => avisoProps()}>Aviso do Pai</button>
            </div>
        </header>
    )
}