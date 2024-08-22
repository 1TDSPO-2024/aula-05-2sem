type CabecalhoProps = {
    paginaProps:string,
    avisoProps:Function,
    nrPaginaProps: number | string,
    statusProps: "loading" | "deployed" | "xuxu"
}

export default function Cabecalho(props:CabecalhoProps ){
    
    document.title = props.statusProps + " - " + props.nrPaginaProps;

    const aluno = {
        nome: "Nuno",
        idade: 11,
        rm: "556303"
    }

    const{nome, idade, rm} = aluno;
    // const{nome, ...resto} = aluno;
    // para usar o resto, chama o resto.nomePropriedade

    return(
        <div>
            <h1>{props.statusProps + " - " + props.nrPaginaProps}</h1>
            <div>
                <button onClick={() => props.avisoProps()}>Aviso do Pai</button>
            </div>
            <div>
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
                <p>RM: {rm}</p>
            </div>
        </div>
    );
}