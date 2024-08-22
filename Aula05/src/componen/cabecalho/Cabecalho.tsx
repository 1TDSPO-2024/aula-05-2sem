export default function Cabecalho(props: {tituloProps: string, avisoPros: Function}){

    document.title = props.tituloProps

    addEventListener("click", ()=>{})

    return(
      <header>
        <h1>{props.tituloProps}</h1>
        <div>
            <button onClick={()=>props.avisoPros()}>Aviso do Pai</button>
        </div>
      </header>
    );
}