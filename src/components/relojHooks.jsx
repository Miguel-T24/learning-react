
import React, {useState,useEffect} from 'react';

function Reloj({hour}){
    return <h3>{hour}</h3>
}


function RelojHooks({titulo="Reloj Default"}){
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        let temporizador;
        if(visible){
            temporizador = setInterval(()=>{
                setHour(new Date().toLocaleTimeString())
            }, 1000);
        }else{
                clearInterval(temporizador);
                console.log("Fase de Desmontaje");
        }

        console.log("Visible: ",visible);
    },[visible]);

    return(
        <>  
            <h2>{titulo}</h2>
            <h3>Esta es la hora en este preciso momento</h3>
            {visible && <Reloj hour={hour}/>}
            <button onClick={() => setVisible(true)}>iniciar</button>
            <button onClick={() => setVisible(false)}>detener</button>
        </>
    )
}

export default RelojHooks;