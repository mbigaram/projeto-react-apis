import styled from "styled-components";

export const Imagem = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`
export const DivHeader = styled.header`
    display: flex;
    align-items: center;
    background: white;
    width: 100%;
    z-index: 2
`
export const ButtonHome = styled.button`
    position: absolute;
    background: #33A4F5;
    border: 1px solid #33A4F5;
    border-radius: 10px;
    color: white;
    width: 287px;
    height: 74px;
    right: 10px;
    top: 20px;
    /* transition: 1s; */
    font-size: 30px;
    font-weight: bold;
`

export const LinkHome = styled.a`
 position: absolute;
 margin-left: 100px;
 font-size: 20px;
 font-weight: bold;
`

export const ButtonRemove = styled.button`
    position: absolute;
    background: #FF6262;
    color: white;
    right: 10px;
    top: 20px;
    font-size: 22px;
    font-family: 'Trebuchet MS', sans-serif;
    font-style: "regular";
    width: 287px;
    height: 74px;
    border-radius: 10px;
    border: none;
`