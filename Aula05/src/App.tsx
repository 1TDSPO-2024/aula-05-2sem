import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function App() {

  const pagina: string = "Página inicial";
  const nrpagina: string = "DOIS";
  const status = "deployed";
  const aviso = () => alert(pagina);

  return (

    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrpagina} statusProps={status} avisoProps={aviso} />
    </div>

  );
}