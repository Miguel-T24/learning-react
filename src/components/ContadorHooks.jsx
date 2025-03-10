import React , {useState} from "react";

function ContadorHooks(props){

   const [contador,setContador] = useState(0); 
    // console.log(useState());

    // Esto es usando funciones normale
    // function sumar(){
    //     setContador(contador + 1);
    // }
    // function restar(){
    //     setContador(contador - 1);
    // }

    // Utilizando Arrow Functions
    const sumar = ()=> setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return(
        <> 
            <h2>Hook - useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <p>Contador de {props.titulo}</p>
            <h3>{contador}</h3>
        </>
    )
}

ContadorHooks.defaultProps = {
    titulo: "Clicks"
}

export default ContadorHooks;