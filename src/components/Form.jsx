import React from "react";
import { useState } from "react";


const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Form (props) {

const [user, setUser] = useState({
  username:'',
  password:''
})

const [error, setError] = useState({
  username:'',
  password:''
})


const validate = (user) => {

  const errors = {}
  if (!regexEmail.test(user.username)) error.username = 'Debe ser un correo electrónico';
  else if (user.username.lenght()>= 35) error.username = 'Nombre demasiado largo'


  
  return errors 
}



const handleChange = ((e) => {

    //seteamos inputs
    setUser({

      //con spread operator lo invocamos llamamos a todos xq los "copia" y solo modificamos uno
    ...user, 
      
      //seteamos el input name mediante el event target
    [e.target.name] : e.target.value
  })
 })

  return (
    <div>
      <h2>LOGI</h2>
      <form action="">

        <label htmlFor="">
          <input type="text" value={user.username} onChange={handleChange}/>
        </label>

        <label htmlFor="">
          <input type="text" value={user.password} onChange={handleChange}/>
        </label>

        <button>Enviar</button>
      </form>
    </div>
  )
}