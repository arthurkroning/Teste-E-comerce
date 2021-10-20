import styled from "styled-components";
import { IoIosArrowRoundForward, IoIosSearch } from "react-icons/io";



export const ArrowLeft = styled(IoIosArrowRoundForward)`
    font-size: 25px;
    color: #fff;
    margin-left: 8px;
`

export const Center = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    
`

export const TopHeader = styled.div`
    background-color: #c10202;
    width: 100vw;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
   
`;

export const TopItens = styled.span`
    margin: 0 20px;
    color: #fbce81;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 13px;
    :last-child {
        margin-right: 60px;
    }
`;

export const TopTitle = styled.span `
    
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 13px;
`;

export const PointIcon = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
`

export const BottomHeader = styled.div`
    background-color: #ff0000;
    width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
export const Logotipo = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #fff;
`
export const ButtonContainer = styled.div`
    
`

export const Button = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #fff;

    background-color: inherit;
    border: none;
    margin: 0 20px;
`
export const ButtonSearch = styled.div`
    background-color: #fff;
    width: 13px;
    height: 13px;
    display: flex;
`
export const ButtonLupa = styled.button`
    border: 1px solid #fff;
    width: 27px;
    height: 27px;
    background-color: #fff;
    border-radius: 8px;
    margin-top: 4px;
    
`
export const Search = styled(IoIosSearch)`
    font-size: 18px;
    color: #ff0000;
`