import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import {Link} from "react-router-dom";


const NavContainer= styled.div`
   display: flex;
   flex-direction: row-reverse;
   background-color: #1BFD9C;
   width:100%;

`

export default function Nav (props) {
  return(
    <NavContainer>
      <Link to='/about'><button>About</button></Link>
      <Link to='/'><button>home</button></Link>
      <SearchBar onSearch={props.onSearch}></SearchBar>
    </NavContainer>
  )
}