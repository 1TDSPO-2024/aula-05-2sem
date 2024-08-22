type CabecalhoProps = {
    paginaProps: string,
    nrPaginaProps: number | string
    statusProps: "loading" | "deployed"
    avisoProps: Function
}

function Cabecalho({ paginaProps, nrPaginaProps, statusProps, avisoProps }: CabecalhoProps) {

    document.title = paginaProps
    const aluno = {
        nome: "Felipe",
        idade: 18,
        rm: 555307
    }
    //const { nome, idade, rm } = aluno
    const { nome, ...resto } = aluno

    return (
        <header>
            <h1>{paginaProps + " - " + nrPaginaProps}</h1>
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