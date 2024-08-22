import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function App() {

  const pagina: string ="Pagina inicial";
  const nrpagina: string = "Dois";
  const status = "Loading";
  const aviso = () => alert(pagina);

  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrpagina} statusProps={status} avisoProps=
      {aviso}>

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