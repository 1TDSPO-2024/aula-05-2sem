interface Props {
    title: string,
    func: Function,
    pageNum: number | string,
    status: "loading" | "deployed",
    children: React.ReactNode,
}

export default function Header({ title, func, pageNum, status, children } : Props){

    document.title = title + " - " + pageNum

    return (
        <header>
            <h1>{title} - {pageNum}</h1>
            <h2>{status}</h2>
            <button onClick={() => func()}>Click Me!</button>
            <div>
                {children}
            </div>
        </header>
    );
}