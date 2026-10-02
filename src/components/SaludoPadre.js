import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
    
    const metodoPadre = (nombre) => {
        console.log(nombre +", Soy tu padre");
    }

    return (<div>
                <h1>Saludo padre</h1>
                <SaludoHijo idhijo=" 1" metodoPapa={metodoPadre}/>
                <SaludoHijo idhijo=" 2" metodoPapa={metodoPadre}/>
            </div>)

}

export default SaludoPadre;