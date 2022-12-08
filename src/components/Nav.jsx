import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import {Link} from "react-router-dom";


const NavContainer = styled.div`
   display: flex;
   flex-direction: row-reverse;
   background-color: #1BFD9C;
   width:100%;

`

const ButtonContainer = styled.div `
  margin-top:5px;
`

export default function Nav (props) {
  return(
    <NavContainer>
      <ButtonContainer>
        <Link to='/about'><button>About</button></Link>
      </ButtonContainer>
      <ButtonContainer>
        <Link to='/'><button>home</button></Link>
      </ButtonContainer>

      <SearchBar onSearch={props.onSearch}></SearchBar>
    </NavContainer>
  )
}