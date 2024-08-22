export default function Cabecalho(props: { tituloProps: string, avisoProps: Function}) {
    return(
        <header>
            <h1>{props.tituloProps}</h1>
            <div>
                <button onClick={() => props.avisoProps()}>Aviso do Pai</button>
            </div>
        </header>
    )
}