import styled from "styled-components";


export const Container = styled.div`
    width: 250px;
    height: 350px;
    margin-top: 50px;


`

export const Block =styled.div `
    height: 90%;
`

export const Image = styled.img`
    width: 250px;
`
export const ImageContainer = styled.div`
    position: absolute;
`
export const Off = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #f14343;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 275px;
    left: 20px;
    > span {
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 10px;
           }
`
export const Description = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #555555;
    font-size: 10px;
    
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const Price = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 18px;
`
export const Condition = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 10px;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const DiscountPrice = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
    text-decoration: line-through;
    color: #888888;
    margin-right: 10px;
`