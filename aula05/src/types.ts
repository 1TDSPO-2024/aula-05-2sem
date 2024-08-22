export type Cabecalho1Props = {
    paginaProps: string; 
    nrpaginaProps: number | string
    children:React.ReactNode
}
export interface Cabecalho2Props {
    statusProps: "loading" | "deployed" | "legal"
    avisoProps: Function;
}