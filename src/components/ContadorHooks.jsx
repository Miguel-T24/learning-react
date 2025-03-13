import React , {useState} from "react";

function ContadorHooks({titulo="Contador Default"}){

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
            <p>Contador de {titulo}</p>
            <h3>{contador}</h3>
        </>
    )
}


export default ContadorHooks;