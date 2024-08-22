export type Cabecalho1Props = {
    paginaProps: string; 
    nrPaginaProps: number | string;
    children:React.ReactNode
}

export interface Cabecalho2Props {
    statusProps: "Loading" | "deployed" | "xuxu";
    avisoProps: Function;
}
