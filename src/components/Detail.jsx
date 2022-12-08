import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



export default function Detail () {

  const [characterDetail, setCharacterDetail] = useState([])

    //va entre llaves el id xq sino lo toma como objeto y no lo busca bien
  let {id} = useParams()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/`+ id)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
            setCharacterDetail(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacterDetail({});
 }, [id]);



 return(
  <div>
    <h1>{characterDetail.name}</h1>
    <h2>{characterDetail.status}</h2>
    <p>{characterDetail.species}</p>
    <p>{characterDetail.type}</p>
    <img src={characterDetail.image} alt="" />
  </div>
 )
}