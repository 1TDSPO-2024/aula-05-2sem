import Cabecalho from "./components/cabecalho/Cabecalho"

export default function App() {

  const pagina: string = "Página inicial";
  const nrpagina: number = 2;
  const status = "loading";
  const aviso = () => alert(pagina);

  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrpagina} status={status} avisoProps = {aviso}/>
    </div>
  )
}