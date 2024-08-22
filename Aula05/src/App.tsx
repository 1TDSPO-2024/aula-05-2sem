import Cabecalho from "./componen/cabecalho/cabecalho";

export default function App(){

  const titulo: string = "Minha página";

  const aviso = ()=> alert(titulo);

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo} avisoProps={aviso}/>
    </div>
  );
}