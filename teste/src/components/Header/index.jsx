import { TopHeader, 
        TopItens, 
        TopTitle, 
        PointIcon, 
        BottomHeader, 
        Logotipo, Button, 
        ButtonContainer, 
        ArrowLeft, 
        Center, 
        ButtonLupa, 
        Search } from "./styles";
import { IoIosArrowDown, } from "react-icons/io";

export const Header = () => {
    return (
        <header>
            <TopHeader>
                <Center>
                    <TopTitle>ENTRE EM CONTATO CONOSCO  </TopTitle>
                    <ArrowLeft/>
                </Center>

                    <TopItens> {"(31)3333-3333"}  </TopItens>
                    <PointIcon/>
                    <TopItens>{"(31)93333-3333"} </TopItens>
                    <PointIcon/>

                <TopItens> comercial@comercial.com.br </TopItens>
            </TopHeader>

            <BottomHeader>
                <Logotipo>LOGOTIPO</Logotipo>

                    <ButtonContainer>
                        <Button>QUEM SOMOS  </Button>
                        <Button>GÔNDOLAS <IoIosArrowDown/> </Button>
                        <Button>MÓVEIS DE AÇO <IoIosArrowDown/> </Button>
                        <Button>ARMAZENAGEM <IoIosArrowDown/> </Button>
                        <Button>CONTATO  </Button>
                        <ButtonLupa> <Search/> </ButtonLupa>
                        
                    </ButtonContainer>
            </BottomHeader>
            

            
        </header>
    )
}
