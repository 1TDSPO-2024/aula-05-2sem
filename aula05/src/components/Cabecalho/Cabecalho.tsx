type Cabecalho1Props = {
    paginaProps: string,
    nrPaginaProps: number | string
    children: React.ReactNode
}
type Cabecalho2Props = {
    statusProps: "loading" | "deployed"
    avisoProps: Function
}

function Cabecalho({ paginaProps, nrPaginaProps, statusProps,
    avisoProps, children }: Cabecalho1Props & Cabecalho2Props) {

    document.title = statusProps + " - " + nrPaginaProps
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
                {children}
            </div>
        </header>
    )
}
export default Cabecalho