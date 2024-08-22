export default function Cabecalho(props: {tituloProps: string}){

    document.title = props.tituloProps

    return(
      <div>
        <h1>{props.tituloProps}</h1>
      </div>
    );
  }