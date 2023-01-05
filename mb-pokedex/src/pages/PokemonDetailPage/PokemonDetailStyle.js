import styled from "styled-components";


export const ImgFrontBack = styled.div`
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   background: white;
   gap: 35px;
   height: 210px;
   width: 220px;
   img{
    height: 220px;
    width: 220px;
   }

`
export const ImgBack = styled.div`
   border-radius: 10px;
   background: white;
   height: 220px;
   width: 220px;
`

export const ImgFront = styled.div`
   border-radius: 10px;
   background: white;
   height: 220px;
   width: 220px;
`


export const BaseStats = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: white;
    margin-left: 20px;
    width: 360px;

    h2{
        padding: 15px;
        font-size: 20px;
        font-weight: bold;
    }
`
export const BaseStatsValue = styled.div`
    display: flex;
    list-style-type: none;
    gap: 10px;
    

    .barra{
        display: flex;
        align-items: center;
        width: 330px;
        padding-top: 6px;
        gap: 12px;
        .forca{
            width:100px;            
        }
        .progress{
            width: 28vw; 
        }
        .valor{
            font-weight: bold;
        }
    }

    .move_poder{
        display: flex;
        gap: 15px;
        margin-left: 14px;
    }

    .moves_name{
        text-align: right;
    } 
`

export const Total = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   margin-left: 25px;
   height: 30px;
   .valor{
     font-weight: bold;
        }
`
export const MainContainer = styled.main`
    background: #5D5D5D;
    padding: 50px 20px;
    height: 120vh;
`
export const Page = styled.h1`
    color: white;
    padding-left: 20px;
    margin-bottom: 40px;
    font-size: 30px;
    font-weight: bold;
`
export const SectionContainer = styled.div`
    display: flex;
    height: 515px;
    background-color: ${(props) => props.color};
    border-radius: 20px;
    padding: 20px 30px;
    
`
export const IdNameTypeMoves = styled.div`
    margin-left: 40px;
    z-index: 1;
`

export const IdName = styled.div`
    color: white;
    h1{
      font-size: 50px;
      font-weight: bold;
    }
    h4{
      font-size: 20px;
      font-weight: bold; 
    }  
`

export const Type = styled.div`
    display: flex;
    padding-bottom: 15px;
    .type_two{
        padding-left: 10px;  
    }
`

export const Moves = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    width: 210px;
    height: 321px;
    padding: 20px;
    gap: 15px;
    
    h2{
        font-size: 20px;
        font-weight: bold;
    }
    .move{
        width: fit-content;
        border: 1px dashed #DBDBDB;
        padding: 6px 10px;
        background: #ECECEC;
        border-radius: 12px;
    }
`

export const ImgCard = styled.img`
   display: flex;
   position: absolute;
   top: 235px;
   right: 17px;
   width:520px;
   z-index: 0;
`
export const ImgDefault = styled.img`
   position: absolute;
   width: 300px;
   right: 50px;
   top: 115px;
   
`

export const ImgPokeMain = styled.img`
   display: flex;
   position: absolute;
   top: 50px;
   right: 320px;
   width:720px;
   z-index: 1;
`





