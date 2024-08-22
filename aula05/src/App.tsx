import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function App() {

  const pagina: string ="Pagina inicial";
  const nrpagina: string = "Dois";
  const status = "Loading"
  const aviso = () => alert(pagina);

  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrpagina} statusProps={status} avisoProps={aviso}/>
    </div>
  );
}