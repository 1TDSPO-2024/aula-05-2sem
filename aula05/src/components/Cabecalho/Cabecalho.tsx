export default function Cabecalho(props: { tituloProps: string }) {

    document.title = props.tituloProps;

    return (
        <header>
            <h1>{props.tituloProps}</h1>
        </header>
    );
}