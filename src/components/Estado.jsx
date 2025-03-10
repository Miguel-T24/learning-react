import RenderizadoConditional from "./RenderizadoCondicional";

function Estado(props){
    return <>
        <p>Esto es el componente estado</p>
        <p>Esto es para pasar un parametro al componente estado {props.msg}</p>
        <RenderizadoConditional/>
    </>

}

export default Estado;