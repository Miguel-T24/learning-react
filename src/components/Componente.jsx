function Componente(props){
    return (
        <>
            <span>Este es un componente creado a parte</span>
            <br/>
            <span>Y sigo agregandole texto</span>
            <br/>
            <span>Y sigo agregandole MASSS texto</span>
            <br/>
            <span>Este es el mensaje: {props.msg}</span>
            <br/>
            <span>Esto es un numero {props.numero}</span>
        </>
    )
}

export default Componente;