type CabecalhoProps = {
    tituloProps: string;
    avisoProps: Function
}

export default function Cabecalho({ tituloProps, avisoProps }: CabecalhoProps) {

    document.title = tituloProps;

    const aluno: { nome: string, idade: number, rm: number } = {
        nome: "Brenno",
        idade: 21,
        rm: 557334
    }

    const { nome, ...resto } = aluno;

    return (
        <header>
            <h1>{tituloProps}</h1>
            <div>
                <button onClick={() => avisoProps()}>Aviso do Pai</button>
            </div>
            <div>
                <p>Nome:{nome}</p>
                <p>idade:{resto.idade}</p>
                <p>rm:{resto.rm}</p>
            </div>
        </header>
    );
}