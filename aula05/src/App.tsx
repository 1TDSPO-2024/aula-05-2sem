import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Main from "./componentes/Main/Main";
import Rodape from "./componentes/Rodape/Rodape";

export default function App(){

  const pagina: string = "Página Inicial";
  const nrPagina:number = 2;
  const status = "loading"
  const aviso = ()=> alert(pagina);
  /* 
  const listaNomes: string[] = ["José", "Miguel", "Maria"];
  const aluno:{nome: string, idade: number, vivo: boolean} = {
    nome: "Juca",
    idade: 19,
    vivo: true
  }
  */
  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}/>
      <Main/>
      <Rodape/>
    </div>
  )
}