import { useState} from "react";

function Eventos(props){
    const [contador, setContador] = useState(0);
    const sumar = () => setContador(contador+1);
    const restar = () => setContador(contador-1);
    return (
        <>
        <h2>Esto son los eventos</h2>
        <nav>
            <h3>{contador}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        </>
    )
}

export default Eventos;