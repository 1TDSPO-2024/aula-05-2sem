export default function Cabecalho({tituloProps, avisoProps}: {tituloProps:string, avisoProps:Function}) {

    document.title = tituloProps

    const aluno = {
        nome: "Nuno",
        idade: 11,
        rm:346789
    }

    const{nome, ...resto} = aluno;

    return (
        <header>
            <h1>{tituloProps}</h1>
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