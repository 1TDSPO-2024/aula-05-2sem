type Cabecalho1Props = {
    paginaProps: string;
    nrPaginaProps: number | string;
}

type Cabecalho2Props = {
    statusProps: "loading" | "deployed";
    avisoProps: Function;
}

export default function Cabecalho({paginaProps, nrPaginaProps, statusProps, avisoProps}: Cabecalho1Props & Cabecalho2Props) {

    document.title = statusProps + " - " + nrPaginaProps;

    const aluno = {
        nome: "Nuno",
        idade: 11,
        rm:346789
    }

    const{nome, ...resto} = aluno;

    return (
        <header>
            <h1>{paginaProps + " - " + nrPaginaProps}</h1>
            <div>
                <button onClick ={()=> avisoProps()}>Aviso do Pai</button>
            </div>
            <div>
                <p>Nome: {nome}</p>
                <p>Idade: {resto.idade}</p>
                <p>RM: {resto.rm}</p>
            </div>
        </header>
    )
}