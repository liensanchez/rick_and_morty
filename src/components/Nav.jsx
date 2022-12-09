import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import {Link} from "react-router-dom";


const NavContainer = styled.div`
   width:100%;
`


const NavBar = styled.div`
   display: flex;
   flex-direction: row-reverse;
   background-color: #1BFD9C;
`

const ButtonContainer = styled.div `
  margin-top:5px;
`

export default function Nav (props) {
  return(
    <NavContainer>
      <NavBar>
        <ButtonContainer>
          <Link to='/about'><button>About</button></Link>
        </ButtonContainer>
        <ButtonContainer>
          <Link to='/home'><button>home</button></Link>
        </ButtonContainer>

        <SearchBar onSearch={props.onSearch}></SearchBar>
      </NavBar>
    </NavContainer>
  )
}