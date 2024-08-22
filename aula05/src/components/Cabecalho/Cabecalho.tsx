export default function Cabecalho(props:{tituloProps:string, avisoProps: Function}) {
  
    document.title = props.tituloProps

    return (
    <header>
      <h1>{props.tituloProps}</h1>
      <div>
        <button onClick={()=> props.avisoProps()}>Aviso do pai</button>
      </div>
    </header>
  );
}
