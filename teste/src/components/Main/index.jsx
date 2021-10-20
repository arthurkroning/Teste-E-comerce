import { Card } from "../Card";
import { Bball, BoxSingup, Row, Contact, ContactImage, FormBox, Info, SingupSpan, SingupText, TextColumn, TextContact, TextContacTwo, Tittle, } from "./styles";
import GondolaUm from "../Assets/GondolaUm.png";
import GondolaDois from "../Assets/GondolaDois.png";
import GondolaTres from "../Assets/GondolaTres.png";
import GondolaQuatro from "../Assets/GondolaQuatro.png";
import Whats from "../Assets/Zap.png";
import { ButtonMain } from "../Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Input } from "../Input";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const cardItens = [
    {
    src:GondolaUm,
    description: "Gondola XYZ",
    price: "R$199,00",
    condition: "ou 6x de R$49,90",
    isPromotion: false,
    },

    {
     src:GondolaDois,
     description: "Gondola XYZ",
     price: "R$119,90",
     condition: "ou 6x de R$29,90",
     isPromotion: false,
    },

    {
    src:GondolaTres,
    description: "Gondola XYZ",
    price: "R$139,90",
    condition: "ou 6x de R$22,70",
    isPromotion: true,
    originalPrice: "R$149,00",
    },

    {
        src:GondolaQuatro,
        description: "Gondola XYZ",
        price: "R$139,90",
        condition: "ou 6x de R$23,31",
        isPromotion: false,
    },

    
]

export const Main = () => {

    return (
        <>

        

            <Tittle>Nossos Produtos</Tittle>


            
                    <Carousel infinite responsive={responsive}>

                    {cardItens.map((item,index)=> <Card 
                    key={index}
                    src={item.src} 
                    description={item.description} 
                    price={item.price}
                    condition={item.condition}
                    isPromotion={item.isPromotion}
                    originalPrice={item.isPromotion && item.originalPrice}
                    />)}
                    
                    </Carousel>

            
        
        
        <Contact>
            <ContactImage>
                <Bball>
                <img src={Whats} alt="WhatsApp Icon" />
                </Bball>            
            </ContactImage>

            <Info>
                <TextContact>
                SOLICITE SEU ORÇAMENTO
                PELO WHATSAPP
                </TextContact>
                <TextContacTwo>
                Venda exclusiva para lojistas
                </TextContacTwo>
                <ButtonMain backgroundColor="#67bb34" border="none" width="300px">CONVERSE COM A GENTE</ButtonMain>
            </Info>
        </Contact>
        
        <BoxSingup>
            <TextColumn>
                <SingupText>
                SEJA UM REVENDEDOR
                E <span>OBTENHA 
                GRANDES LUCROS </span> 
                EM SUAS VENDAS!
                </SingupText>
                <SingupSpan>Cadastre-se usando
                            <br/> o formulário ao lado
                </SingupSpan>
            </TextColumn>

            <FormBox>
                <Row>
                    <Input height="30px" width="200px" label="Nome" required/>
                    <Input height="30px" width="200px" label="Sobrenome" required/>
                </Row>
                <Row>
                <Input height="30px" width="549px" label="E-Mail" required/>
                </Row>
                <Row>
                    <Input height="30px" width="200px" label="Telefone" required/>
                    <Input height="30px" width="200px" label="Link para seu curriculo" required/>
                </Row>
                <ButtonMain type="submit" width="550px" marginLeft="80px" backgroundColor="inherit">Enviar meu cadastro</ButtonMain>
            </FormBox>
        </BoxSingup>


        </>
    )
}