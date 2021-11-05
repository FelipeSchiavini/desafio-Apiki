import styled from "styled-components"

export const HomeContainer = styled.div`
    width: 75%;
    margin: auto;
    
`
export const CardInfo  = styled.p`
    font-size: 1.8rem;
    text-align: justify;
    font-family: 'Zen Kurenaido', sans-serif;
`

export const CardTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    width: 100%;

    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`

export const CardImg = styled.img`
    width: 40%;
    transform: 1s;

    &:hover{
        width:41%;
        box-shadow: 1px 1px 10px 1px black;
    }
    `

export const CardSpace  = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

export const CardContainer = styled.div`
    cursor: pointer;
    transition: 1s;
    padding-bottom:15px;

    &:hover{
        transform: scale(1.05);

    }
`