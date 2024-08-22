type CabecalhoProps = {
    paginaProps: string,
    nrPaginaProps: number | string,
    statusProps: "loading" | "deployed" | "xuxu",
    avisoProps: Function
}

export default function Cabecalho(props:CabecalhoProps){
    
    document.title = props.statusProps + " - " + props.nrPaginaProps;

    const aluno = {
        nome: "Nuno",
        idade: 13,
        rm: 443331
    }

    const{nome,idade,rm} = aluno;
    
    return(
      <header>
        <h1>{props.statusProps + " - " + props.nrPaginaProps}</h1>
        <div>
            <button onClick={()=>props.avisoProps()}>
                Aviso do Pai
            </button>
        </div>
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>RM: {rm}</p>
        </div>
      </header>
    )
}