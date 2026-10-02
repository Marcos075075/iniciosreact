import HijoMatematicas from "./HijoMatematicas"

function PadreMatematicas() {
    
 const dobleNumero = (num) => {
        let doble = num * 2;
        console.log("Doble: " + doble);
    }
    const tripleNumero = (num) => {
        let triple = num * 3;
        console.log("Triple: " + triple);
    }
    return (<div>
        <h1>Padre mates</h1>
        <HijoMatematicas numero="7" dobleNumero={dobleNumero}
        tripleNumero={tripleNumero}/>
        <HijoMatematicas numero="99" dobleNumero={dobleNumero}
        tripleNumero={tripleNumero}/>
    </div>)


}

export default PadreMatematicas