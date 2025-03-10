function Login(props){
    return(
        <>
        <h2>Login</h2>
        </>
    );
}

function Logout(props){
    return(
        <>
        <h2>Logout</h2>
        </>
    );
}


function RenderizadoConditional(props){
    return(
        <>
            <span>Aqui estaran los componentes que se renderizan dependiendo de una condicion:</span>
            <Login/>
            <Logout/>
        </>
    );
}


export default RenderizadoConditional;