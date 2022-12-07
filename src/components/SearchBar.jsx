import styled from 'styled-components'

const SearchBarContainer= styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  padding-right: 10px;
`

export default function SearchBar(props) {
  return (
    <SearchBarContainer>
      <input type='search' onChange={} />
      <button  onClick={props.onSearch}> Agregar </button> 
    </SearchBarContainer>
  );
}
