function HijoMatematicas(props) {
     let numero = props.numero;
    //RECUPERAMOS LOS METODOS DEL PARENT
    let dobleNumero = props.dobleNumero;
    let tripleNumero = props.tripleNumero;
    return (<div>
        <h2>Hijo mates: {numero}</h2>
        <button onClick={ () => dobleNumero(numero)}>
            Doble {numero}
        </button>
        <button onClick={ () => tripleNumero(numero)}>
            Triple {numero}
        </button>
    </div>)

}

export default HijoMatematicas