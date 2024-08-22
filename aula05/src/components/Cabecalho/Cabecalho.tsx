import { ReactNode } from "react";

type CabecalhoProps1 = {
    paginaProps: string;
    nrPaginaProps: number | string;
    children: ReactNode;
};
type CabecalhoProps2 = {
    statusProps: 'loading'|'deployed';
    avisoProps: Function;
};

export default function Cabecalho({paginaProps,nrPaginaProps,children, statusProps, avisoProps} : CabecalhoProps1 & CabecalhoProps2) {
  document.title = statusProps + '-' + nrPaginaProps;


  return (
    <header>
      <h1>{paginaProps + '-' + nrPaginaProps}</h1>
      <div>
        <button onClick={() => avisoProps()}>Aviso do pai</button>
        <div>
            {children}

        </div>
      </div>
    </header>
  );
}
