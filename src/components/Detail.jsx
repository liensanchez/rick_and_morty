import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";



const DetailContainer = styled.div `
  display: flex;
  justify-content: space-around;
  margin-top: 85px;
  margin-right: auto;
  margin-left: auto;
  width: 850px;
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
  height: 500px;
  border-radius: 5px;
  backdrop-filter: blur(14px);
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
`

const ImageContainer = styled.div`
  margin-top: 100px;
`

const InfoContainer = styled.div`
  margin-top: 100px;
`


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
  <DetailContainer>
    <ImageContainer>
      <img src={characterDetail.image} alt="" />
    </ImageContainer> 
    <InfoContainer>
      <h1>{characterDetail.name}</h1>
      <h2>{characterDetail.status}</h2>
      {/* <img src=".../img/heart-pulse.svg" alt="" /> */}
      <p>{characterDetail.species}</p>
      <p>{characterDetail.gender}</p>
      <p>{characterDetail.type}</p>
    </InfoContainer>
  </DetailContainer>
 )
}