import { InputBase, Column, Label } from "./styles"

export const Input = ({required,label,...props}) => {
    return (
        <Column>

            <Label>{label} {required && <span>*</span>} </Label>
            <InputBase type="text" required={required} {...props} />


        </Column>
    )

}