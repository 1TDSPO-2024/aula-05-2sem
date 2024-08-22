import Cabecalho from "./componen/cabecalho/cabecalho";

export default function App(){

  const pagina: string = "Página inicial";
  const nrpagina: number = 2;
  const status= "loading";
  const aviso = () => alert(pagina);

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho 
      paginaProps={pagina} nrPaginaProps={nrpagina} statusProps={status} avisoProps={aviso}>

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
  );
}