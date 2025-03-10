import frameworks from "../helpers/frameworks.json"

function RenderizadodeElementos(props){
    let seasons = ["Invierno", "Otoño", "Primavera", "Verano"]
    return(
        <>
            <span>Este es un renderizado de elementos</span>
            <ul>
                {seasons.map(e => (
                    <li key = {e}>{e}</li>    
                ))}
            </ul>

            <span>Esto renderiza todos los frameworks:</span>

            <ul>
                {
                    frameworks.Frameworks.map(e => (
                        <li key = {e.id}>Name: {e.name} - Web: {e.web}</li>
                    ))
                }
            </ul>

                <span>Aca esta el renderizado condicional:</span>

            <ul>
                {frameworks.Frameworks.map(e => (
                    (e.id === 3)?<li key = {e.id}>Nombre : {e.name} - Web: {e.web}</li>
                    : <p>No valido</p>
                ))}
            </ul>
        </>
    )
}

export default RenderizadodeElementos;