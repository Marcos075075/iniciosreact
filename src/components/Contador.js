import { useState } from "react";

function Contador() {
    
    const [numero, setNumero ] = useState(0);

    const incrementar = () => {
        setNumero( numero + 1)
    }
    return (
        <div>
            <h1>Contador state: {numero}</h1>
            <button onClick={() => setNumero(numero - 1)}>Restar</button>
            <button onClick={ () => incrementar()}>Sumar</button>
        </div>)

}

export default Contador;