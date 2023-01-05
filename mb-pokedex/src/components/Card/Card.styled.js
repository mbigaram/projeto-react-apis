import styled from "styled-components";

export const Container = styled.div`  
    position: relative;    
    display: flex;
    background-color: ${(props)=>props.color};     
    padding: 20px;
    width: 440px;
    height: 210px; 
    border-radius: 10px;
    /* overflow: hidden; */
    .details{ 
      color: white;
      h4{
       font-size: 20px;
       font-weight: bold;
       margin-top: 35px;
       text-decoration: underline;
      }
    }
`
export const Coluna1Container = styled.div`

`
export const Coluna2Container = styled.div`

`
export const ContainerMaster = styled.div`
display: flex;
`



export const ImgPokemon = styled.img`
    position: absolute;
    right: 0;
    bottom: 80px; 
    width: 193px;
    height: 193px;
    
`
export const ImgCard = styled.img`
  position: absolute;
  right: 0px;
  bottom: -4px;  
    
`
export const ButtonAdd = styled.button`
    background: white;
    position: absolute;
    right: 20px;
    bottom: 10px;
    width: 146px;
    height: 38px;
    border-radius: 10px;
    border: none;
    z-index: 1;
`
export const ButtonRemove = styled.button`
    position: absolute;
    background: #FF6262;
    color: white;
    right: 20px;
    bottom: 10px;
    width: 146px;
    height: 38px;
    border-radius: 10px;
    border: none;
    z-index: 1;
`
export const PokeName = styled.h2`
    color: white;
    font-size: 30px;
    font-weight: bold;
`
export const PokeId = styled.h3`
    color: white;
    font-size: 17px;
    font-weight: bold;
`
export const Types = styled.article`
    display: flex;
    color: white;
    gap: 5px;
`

export const ModalContent = styled.div`
    font-size: 30px;
    color: white;
   
`


