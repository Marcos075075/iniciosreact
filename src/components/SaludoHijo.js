function SaludoHijo(props) {
    
    let ejecutarCP = props.metodoPapa;
    return (<div>
                <h2>Saludo hijo</h2>
                <button onClick={ () => ejecutarCP("Luke" + props.idhijo)}>Activar control parental</button>
            </div>)

}

export default SaludoHijo;