type CabecalhoProps = {
    paginaProps: string;
    nrPaginaProps: number | string;
    statusProps: "loading" | "deployed" | "xuxu";
    avisoProps: Function;
}

export default function Cabecalho({ paginaProps, nrPaginaProps, statusProps, avisoProps }: CabecalhoProps) {

    document.title = statusProps + " - " + nrPaginaProps;

    return (
        <header>
            <h1>{paginaProps + " - " + nrPaginaProps}</h1>
            <div>
                <button onClick={() => avisoProps()}>Aviso do Pai</button>
            </div>
        </header>
    );
}