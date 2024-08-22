function Cabecalho({ tituloProps, avisoProps }: { tituloProps: string, avisoProps: Function }) {

    document.title = tituloProps
    const aluno = {
        nome: "Felipe",
        idade: 18,
        rm: 555307
    }
    //const { nome, idade, rm } = aluno
    const { nome, ...resto } = aluno

    return (
        <header>
            <h1>{tituloProps}</h1>
            <button onClick={() => { avisoProps() }}>Aviso do Pai</button>
            <div>
                <p>Nome: {nome}</p>
                <p>Idade: {resto.idade}</p>
                <p>RM: {resto.rm} </p>
            </div>
        </header>
    )
}
export default Cabecalho