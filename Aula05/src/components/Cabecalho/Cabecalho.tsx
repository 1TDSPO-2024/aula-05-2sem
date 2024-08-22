export default function Cabecalho(props: { tituloProps: string, avisoProps: Function }) {

    document.title = props.tituloProps;

    const aluno = {
        nome: "Nuno",
        idade: 11,
        rm: 346789
    }

    const { nome, idade, rm } = aluno;

    return (
        <header>
            <h1>{props.tituloProps}</h1>
            <div>
                <button onClick={() => props.avisoProps()}>Aviso do Pai</button>
            </div>
            <div>
                <p>Nome:{nome}</p>
                <p>Idade:{idade}</p>
                <p>RM:{rm}</p>
            </div>
        </header>
    )
}