type CabecalhoProps = {
    tituloProps: string;
    avisoProps: Function;
}

export default function Cabecalho({tituloProps, avisoProps}:CabecalhoProps){

    document.title = tituloProps

    const aluno= {
        nome: "Weslley",
        idade: 19,
        rm: "556039"
    }

    const{nome,idade,rm} = aluno;

    return(
      <header>
        <h1>{tituloProps}</h1>
        <div>
            <button onClick={()=>avisoProps()}>Aviso do Pai</button>
        </div>
        <div>
            <p>Nome:{nome}</p>
            <p>Idade:{idade}</p>
            <p>RM:{rm}</p>
        </div>
      </header>
    );
}