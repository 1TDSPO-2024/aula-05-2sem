export default function Cabecalho({tituloProps, avisoProps}: { tituloProps: string, avisoProps: Function}) {

    document.title = props.tituloProps;

    const aluno = {
        nome: "Rayssa",
        idade: 18,
        rm: 558021
    }

    const{nome, idade, rm} = aluno;

    return(
        <header>
            <h1>{tituloProps}</h1>
            <div>
                <button onClick={() => avisoProps()}>Aviso do Pai</button>
                <div>
                    <p>Nome: {nome}</p>
                    <p>Idade: {idade}</p>
                    <p>RM: {rm}</p>
                </div>
            </div>
        </header>
    )
}