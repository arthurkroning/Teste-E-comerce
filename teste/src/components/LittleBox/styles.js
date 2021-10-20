import styled from "styled-components";
import{
    space,
    color,
    layout,
    flexbox,
    background,
    border,
} from 'styled-system';


export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;  
    justify-content: space-around;
    height: 150px;
    color: #ffdd8a;
    text-align: center;

    ${space};
    ${color};
    ${layout};
    ${flexbox};
    ${background};
    ${border};
`

export const Text = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    width: 320px;
`