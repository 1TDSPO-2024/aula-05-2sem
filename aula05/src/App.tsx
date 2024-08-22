import Cabecalho from "./componentes/Cabecalho/Cabecalho";


export default function App(){

  const pagina: string = "Página Inicial";
  const nrPagina: number = 2;
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
      <Cabecalho 
        paginaProps={pagina} 
        nrPaginaProps={nrPagina} 
        statusProps={status} 
        avisoProps={aviso}>

        <ul>
          <li><a href="#">Aluno-1</a></li>
          <li><a href="#">Aluno-2</a></li>
          <li><a href="#">Aluno-3</a></li>
          <li><a href="#">Aluno-4</a></li>
          <li><a href="#">Aluno-5</a></li>
          <li><a href="#">Aluno-6</a></li>
        </ul>
      </Cabecalho>
    </div>
  )
}