import { CabecalhoProps1, CabecalhoProps2 } from "../../types";

export default function Cabecalho({
  paginaProps,
  nrPaginaProps,
  children,
  statusProps,
  avisoProps,
}: CabecalhoProps1 & CabecalhoProps2) {
  document.title = statusProps + "-" + nrPaginaProps;

  return (
    <header>
      <h1>{paginaProps + "-" + nrPaginaProps}</h1>
      <div>
        <button onClick={() => avisoProps()}>Aviso do pai</button>
        <div>{children}</div>
      </div>
    </header>
  );
}
