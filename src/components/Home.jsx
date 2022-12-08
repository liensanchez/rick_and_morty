import React from 'react'
import Cards from './Cards'

export default function Home (props) {


  return (
    <>
      <h1>ESTAMOS EN HOME</h1>
      <Cards onClose={props.onClose} characters={props.characters}></Cards>
    </>
  )
}