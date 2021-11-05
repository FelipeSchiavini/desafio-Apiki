import styled from 'styled-components'

export const AppContainer = styled.div`
    width: 75%;
    margin: 0 auto 0 auto;
    min-height: 100vh;

    box-shadow: 0px 10px 44px 20px rgba(0,0,0,.6);
    background-color:var(--color-pallets-blue-light);
`

export const Button = styled.button`
    cursor: pointer;
    text-transform:uppercase;
    font-family: 'Oswald', sans-serif;
    font-weight:400;
    font-size:1.2rem;

    width: 130px;
    padding: 15px;
    border: 1px solid rgba(0,0,0,.4);
    border-radius: 8px;

    color: var(--color-white);
    background-color: var(--color-pallets-blue);
    transition: 0.5s;
    
    &:hover{
        background-color:var(--color-pallets-yellow);
        color: var(--color-pallets-black);
    }
`;

export const DivButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 150px;

    width: 100%;
`

export const LogoImg = styled.img`
    width: 40%;
`