import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function App() {
  const pagina: string = "Minha página";
  const nrpagina:number = 2
  const status = 'loading'

  const aviso = ()=> alert(pagina)
  return (
    <div>
      <h1>Componente APP</h1>
      <Cabecalho  paginaProps={pagina} nrPaginaProps={nrpagina} statusProps={status} avisoProps={aviso}/>
    </div>
  );
}
