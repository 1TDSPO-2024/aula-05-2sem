export default function Cabecalho({tituloProps, avisoProps}:{tituloProps:string, avisoProps: Function}) {
  
    document.title = tituloProps

    const aluno = {
        nome: "nuno",
        idade: 11,
        rm: 346789
    }

    // const{nome, idade, rm} = aluno
    const{nome, ...resto} = aluno

    return (
    <header>
      <h1>{tituloProps}</h1>
      <div>
        <button onClick={()=> avisoProps()}>Aviso do pai</button>
        <div>
            <p>Nome: {nome}</p>
            <p>idade: {resto.idade}</p>
            <p>rm: {resto.rm}</p>
        </div>
      </div>
    </header>
  );
}
