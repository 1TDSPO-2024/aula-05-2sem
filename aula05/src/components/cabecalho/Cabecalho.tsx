export default function Cabecalho(props: { tituloProps: string}) {
    return(
        <header>
            <h1>{props.tituloProps}</h1>
        </header>
    )
}