import styled from "styled-components";
import{
    space,
    color,
    layout,
    flexbox,
    background,
    border,
} from 'styled-system';


export const Button = styled.button`
    font-family: 'PT Sans Narrow', sans-serif; 
    font-weight: 700;
    font-size: 16px;
    border-radius: 10px;
    border: solid;
    text-transform: uppercase;
    height: 40px;
    color: #fff;    
    
    &:hover {
        opacity: 70%;
    }

    ${space};
    ${color};
    ${layout};
    ${flexbox};
    ${background};
    ${border};
`