import styled from "styled-components";
import img from "./fundo.png";

export const SectionTop = styled.div`
    background-image: url(${img});
    width: 100vw;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Box = styled.div`
    background-color: inherit;
    width: 600px;
    height: 400px;
    margin: 100px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    
`

export const Tittle = styled.h1`
    font-weight: 900;
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
    margin-bottom: 20px;
    margin-top: 30px;
`
export const Text = styled.h3`
    font-size: 14px;
    font-weight: 500;
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
    text-align: end;
    margin-bottom: 20px;
`

export const TextTwo = styled.h2`
    font-weight: 800;
    text-align: end;
    font-size: 16px;
    display: flex;
    justify-content: flex-end;
    text-align: end;
    margin-right: 40px;
    margin-bottom: 20px;
`
export const SectionBottom = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    
`
