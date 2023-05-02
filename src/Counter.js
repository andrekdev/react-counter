import React, { useState, useEffect} from "react";
//useState gerenciar estado de compontente, no caso, mudar o numero do span

import './Counter.css'
const Counter = () => {


  //Para eventos de clique, sempre tera de ser onClick

  //let contador = 0
  const [contador, setContador] = useState(0)


  //UseEffect
  //meio que um aviso, caso altere a variavel


  useEffect(() => {
    console.log("Renderizou")
  }, [
    //ele depende de uma variavel, se ela se alterar ele faz o console.log
    contador
  ])

  //setContador vai ser usado para mudar o estado do numero, setContador = 1


  //funcao do onClick

  const eventoClique = operador => {
    //tende criar outra variavel, pois o setContador é const
    const novoValor = operador === '+' ? contador + 1
    : contador - 1
    
    setContador(novoValor)
  }

  return (

    <div className="counter">
    <span>{contador}</span>
    <button onClick={() => eventoClique('-')}>-</button>
    <button onClick={() => eventoClique('+')}>+</button>
    </div>

  )

}

export default Counter;
