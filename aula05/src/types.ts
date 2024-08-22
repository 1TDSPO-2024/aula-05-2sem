
export type Cabecalho1Props = {
    paginaProps:string,
    avisoProps:Function,
    children:React.ReactNode
}

export interface Cabecalho2Props {
    nrPaginaProps: number | string,
    statusProps: "loading" | "deployed" | "xuxu"
}