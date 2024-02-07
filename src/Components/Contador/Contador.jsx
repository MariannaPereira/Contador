import React,{ useState} from "react";


function Contador (){
    //sintaxe do useState
const [numero, setNumero] = useState(0)

//função para adicionar um valor quando eu clicar no botão +
function Adicionar (){

    //para parar em 25:
    if (numero <25){

    setNumero(numero + 1)
    }
}

//função para subtrair um valor quando clicar no -
function Subtrair (){
    if (numero >0){
    setNumero (numero - 1)
    }
}

function Zerar (){
    setNumero (0)
    
}
    return(
        <>
        <h1>{numero}</h1>
        <button onClick={Adicionar}>+</button>
        <button onClick={Subtrair}>-</button>
        <button onClick={Zerar}>Zerar</button>
        </>
    )
}

export default Contador