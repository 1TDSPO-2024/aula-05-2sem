type CabecalhoProps = {
    paginaProps: string;
    nrPaginaProps: number | string;
    statusProps: 'loading'|'deployed';
    avisoProps: Function;
};

export default function Cabecalho({paginaProps,nrPaginaProps, statusProps, avisoProps} : CabecalhoProps) {
  document.title = statusProps + '-' + nrPaginaProps;

  const aluno = {
    nome: "nuno",
    idade: 11,
    rm: 346789,
  };

  // const{nome, idade, rm} = aluno
  const { nome, ...resto } = aluno;

  return (
    <header>
      <h1>{paginaProps + '-' + nrPaginaProps}</h1>
      <div>
        <button onClick={() => avisoProps()}>Aviso do pai</button>
        <div>
          <p>Nome: {nome}</p>
          <p>idade: {resto.idade}</p>
          <p>rm: {resto.rm}</p>
        </div>
      </div>
    </header>
  );
}
