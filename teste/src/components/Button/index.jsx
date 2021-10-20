import { Button } from "./styles"

export const ButtonMain = ({children,...props}) => {
    return (

        <Button {...props}>
        {children}
        </Button>
    )

}