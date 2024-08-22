type Cabecalho1Props = {
    paginaProps: string,
    nrPaginaProps: number | string;
    children: React.ReactNode
}

type Cabecalho2Props = {
    statusProps: "loading" | "deployed" | "xuxu";
    avisoProps: Function;
}

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