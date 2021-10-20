import styled from "styled-components";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import BackGround from "../Assets/Background.png";

export const ArrowLeft = styled(IoIosArrowBack)`
    font-size: 30px;
    cursor: pointer;
`

export const ArrowRight = styled(IoIosArrowForward)`
    font-size: 30px;
    cursor: pointer;
`

export const Container = styled.main`
    background-color: #cdcdcd;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
`

export const Tittle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    padding: 50px 0;
    text-align: center;

`

export const CardBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
    align-items: center;
`
export const Contact = styled.div`
    background-color: white;
    height: 400px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const ContactImage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Bball = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: #c5d9b7;
    border: 15px solid #a0e570;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Info = styled.div`
    
    height: 250px;
    width: 800px;
`
export const TextContact = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 38px;
    color: black;
    line-height: 110%;
    
`
export const TextContacTwo = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: black;
    font-size: 22px;
    margin: 30px 0;
`

export const BoxSingup = styled.div`
    font-family: 'Poppins', sans-serif;
    height: 500px;
    width: 100vw;
    background-image: url(${BackGround});
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const TextColumn = styled.div`
    width: 400px;
    height: 400px;

`
export const SingupText = styled.h1`
    font-weight: 900;
    font-size: 35px;
    margin: 80px 0;
    line-height: 120%;
    > span{
        color: #f92525;
    }
`
export const SingupSpan = styled.span`
    font-size: 22px;
   
`

export const FormBox = styled.form`
    height: 350px;
    width: 800px;
    display: flex;
    flex-direction: column;
    
    
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 700px;
    justify-content: space-around;
    margin-bottom: 40px;
`






