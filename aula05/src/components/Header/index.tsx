interface Props {
    title: string,
    func: Function,
}

export default function Header({ title, func } : Props){
    return (
        <header>
            <h1>{title}</h1>
            <button onClick={() => func()}>Click Me!</button>
        </header>
    );
}