import { useState } from "react"

function Car(props) {
    
    const [estado, setEstado] = useState(false);
    const [velocidad, setVelocidad] = useState(0);
    let coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMaxima: parseInt(props.velocidadMaxima),
        aceleracion: parseInt(props.aceleracion)
    }

    const comprobarEstado = () => {
        if (estado == true) {
            return (<h2 style={{color:"green"}}> ARRANCADO: BRUM BRUM</h2>)
        } else{
            return (<h2 style={{color:"red"}}> APAGADO (NO BRUM BRUM)</h2>)
        }
    }


    const aceleracion = () => {
     if (estado == false) {
        alert("COMO NARICES PRETENDES AVANZAR CON EL COCHE APAGADOOO!!!!!!!!")
        setVelocidad(0);
     } else {
        if (velocidad >= coche.velocidadMaxima) {
            setVelocidad(coche.velocidadMaxima);
        } else {
            setVelocidad(velocidad + coche.aceleracion);
        }
     }   
    }

    const frenar = () => {
     if (velocidad <= 0) {
        setVelocidad(0);
     } else {
        setVelocidad(velocidad - coche.aceleracion);
     }   
    }

    return(
        <div>
            <h1>{coche.marca} {coche.modelo}</h1>
            {comprobarEstado()}
            <h3>Velocidad actual: {velocidad}</h3>
            <button onClick={() => {setEstado(!estado)}}>Arrancar/Apagar</button>
            <button onClick={() => {aceleracion()}}>Acelerar</button>
            <button onClick={() => {frenar()}}>Frenar</button>
        </div>
    )

}

export default Car