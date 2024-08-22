export default function Cabecalho({tituloProps, avisoProps}: { tituloProps:string, avisoProps: Function }){

    document.title = tituloProps;

    const aluno = {
        nome: "Marcos",
        idade: 126, 
        rm: 123456
    }

    const { nome, idade, rm } = aluno;
    //const {nome, ...resto }

    return(
        <header>
            <h1>{tituloProps}</h1>
            <div>
                <button onClick={() => avisoProps()}>Aviso do Pai</button>
            </div>
            <div>
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
                <p>RM: {rm}</p>
            </div>
        </header>
    )

} 