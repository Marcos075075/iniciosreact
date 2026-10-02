import './SumarNumeros.css'

function SumarNumeros(props) {

    const suma = (num1, num2) => {
        //let suma = num1 + num2;
        let suma = parseInt(props.num1) + parseInt(props.num2);
        console.log("La suma de los numeros es: " + suma);
    }
    
    return (<div>
                <h1> Sumar Numeros {props.num1} y {props.num2}</h1>
                <button className='BotonSuma' onClick={ () => suma()}>Sumar numeros</button>
            </div>)

}

export default SumarNumeros;