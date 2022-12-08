import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import {Router, Link, Route} from "react-router-dom";


const NavContainer= styled.div`
   display: flex;
   flex-direction: row-reverse;
   background-color: #1BFD9C;
   position:fixed;
   width:100%;
   z-index: 1;
   height: 30px;
`

export default function Nav (props) {
  return(
    <Router>
      <Route>
        <NavContainer>
        <Link to="/about"><button>About</button></Link>
          <button>home</button>
          <SearchBar onSearch={props.onSearch}></SearchBar>
        </NavContainer>
      </Route>
    </Router>


  )
}