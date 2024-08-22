import Cabecalho from "./components/Cabecalho/Cabecalho";
 
export default function App() {
 
  const pagina: string = "Página inicial";
  const nrpagina: string = "DOIS";
  const status = "deployed";
  const aviso = () => alert(pagina);
 
  return (
 
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrpagina} statusProps={status} avisoProps={aviso}>
 
        {/* ul>li*6>a[href=#]{Aluno-$} */}
 
        <ul>
          <li><a href="#">Aluno-1</a></li>
          <li><a href="#">Aluno-2</a></li>
          <li><a href="#">Aluno-3</a></li>
          <li><a href="#">Aluno-4</a></li>
          <li><a href="#">Aluno-5</a></li>
          <li><a href="#">Aluno-6</a></li>
        </ul>3
 
      </Cabecalho>
    </div>
 
  );
}