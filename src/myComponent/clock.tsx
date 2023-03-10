interface clokc{
    date:Date;
}
export function Clock (props:clokc){
    return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
