//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Interprete(props) {
  const { nombre, foto } = props

  return (
    <>
      <div>
        <img src={foto} alt={nombre} />
        {/* <h3>Interprete: {props.nombre}</h3> */}
        <div>
          <h2>{nombre}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </>
  )
}

export default Interprete
