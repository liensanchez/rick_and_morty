import styled from 'styled-components'
import { useState } from 'react'


const SearchBarContainer= styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  padding-right: 10px;
`

export default function SearchBar(props) {


    //seteamos el id q luego vamos a utilizar para la busqueda
  const [id, setId] = useState('')

  const handleChange = e =>{
    setId(e.target.value)
  }

  return (
    <SearchBarContainer>
      <input type='search' name='search' onChange={handleChange} placeholder='ingresa un numero'/>
        {/* props.onSearch con id porque es lo q vamos a utilizar para filtrar  */}

        {/*tiene q ser llamada asi, xq sino se ejecuta multiple */}
      <button onClick={() => props.onSearch(id)}> Agregar </button> 
    </SearchBarContainer>
  );
}
