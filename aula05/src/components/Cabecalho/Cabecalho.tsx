function Cabecalho(props: { tituloProps: string, avisoProps: Function }) {

    document.title = props.tituloProps
    addEventListener("click", () => { })
    return (
        <header>
            <h1>{props.tituloProps}</h1>
            <button onClick={() => { props.avisoProps() }}>Aviso do Pai</button>
        </header>
    )
}
export default Cabecalho