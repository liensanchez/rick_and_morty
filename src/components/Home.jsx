import React from 'react'
import Cards from './Cards'

export default function Home (props) {


  return (
    <>
      <Cards onClose={props.onClose} characters={props.characters}></Cards>
    </>
  )
}