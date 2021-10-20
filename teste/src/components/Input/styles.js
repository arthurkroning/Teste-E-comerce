import styled from "styled-components";
import{
    color,
    layout,
    flexbox,
    background,
    border,
} from 'styled-system';

export const InputBase = styled.input`
    border-radius: 8px;
    ${color};
    ${layout};
    ${flexbox};
    ${background};
    ${border};
` 


export const Label = styled.label`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    >span {
        color: #f92525;
    }
    
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`