import styled from 'styled-components'
import SearchBar from './SearchBar'


const NavContainer= styled.div`
   display: flex;
   flex-direction: row-reverse;
   background-color: #1BFD9C;
   position:fixed;
   width:100%;
   z-index: 1;
   height: 30px;
`

export default function Nav () {
  return(
    <NavContainer>
      <SearchBar></SearchBar>
    </NavContainer>

  )
}