import React from "react";
import { useState } from "react";
import styled from "styled-components";



const FormContainer = styled.div `
  display: flex;
  flex-direction: column; 
  margin-top: 45px;
  margin-right: auto;
  margin-left: auto;
  width: 850px;
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
  height: 500px;
  border-radius: 5px;
  backdrop-filter: blur(14px);
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  text-align: center;
 

`

const SendButton = styled.button `
  margin-top: 30px;
  width: 9em;
  height: 3em;
  border-radius: 30em;
  font-size: 15px;
  font-family: inherit;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: #0fd850;
`



const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass =  new RegExp("^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$")

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

    const error = {} 

    if (!regexEmail.test(user.username)){
      error.username = 'Debe ser un correo electrónico'; 
    } 
    if (user.username.lenght >= 35){
      error.username = 'Nombre demasiado largo' 
    } 
    if (!user.username) {
      error.username = 'Debe ingresar un nombre ' 
    } 
    
    if (!regexPass.test(user.password)){
      error.password = 'Debe tener entre 6 y 10 caracteres'; 
    } 

    
    return error 
    
  }



  const handleInputChange = ((e) => {

      //seteamos inputs
      setUser({

        //con spread operator lo invocamos llamamos a todos xq los "copia" y solo modificamos uno
      ...user, 
        
        //seteamos el input name mediante el event target
      [e.target.name] : e.target.value    
    })


      setError(

        validate({
          ...user,


          [e.target.name] : e.target.value
        })
      )
  })



 const handleSubmit =  ((e) => {
    e.preventDefault() 
    props.login(user)
/*     if (Object.keys(error).length === 0){
      return window.alert('Datos completos')
    } else {
      return window.alert('Debes corregir los errores')
    } */
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormContainer>
        <h2>LOGIN</h2>
        <label htmlFor="">Username: <br></br>
          <input type="text" name='username' value={user.username} onChange={handleInputChange}/>
        </label>
        <p>{error.username && error.username}</p>

        <label htmlFor="">Password : <br />
          <input type="password" name='password' value={user.password} onChange={handleInputChange}/>
        </label>
        <p>{error.password && error.password}</p>

        <div>
          <SendButton type='submit'>Enviar</SendButton>
        </div>
        </FormContainer>
        
      </form>
      </>
  )
}