import React, {useState,useEffect} from "react";

function ScrollHooks({titulo = "Default Props de Scroll Hook"}){

    const [scrollY, setScrollY] = useState(0);

    // Detecta cada vez que hay un cambio en el scroll
    useEffect(() => {
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener('scroll', detectarScroll);

        return () => window.removeEventListener('scroll',detectarScroll);
    },[scrollY]); 

    // Cuando quieres que el use efect solo se ejecute una sola vez, es la facse de montaje, y en el segundo parametro le colocar el arregla vacio
    useEffect(() => {
        console.log("FASE DE MONTAJE")
    },[])

    // Cuando quieres que se ejecute el use effect cada vez que cambie una variable, coloca el segundo parametro con la variable que va a tener cambios
    useEffect(() => {
        console.log("FASE DE ACTUALIZACION");
        console.log("Scroll: ",scrollY, "px");
    },[scrollY]);

    // Nota, nunca dejes el segundo parametro del use effect vacio


    // Fase de Desmontaje
    // Cuando le dices a react que vas a retornar una funcion, ya reac lo ve como la fase de desmontaje
    useEffect(() => {

        return () => {
            console.log("FASE DE DESMONTAJE")
        }
    },[scrollY]);


    return(
        <>
            <h3>{titulo}</h3>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )

}


export default ScrollHooks;