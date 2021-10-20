import { BoxFooter, BoxInfo, Column, Facebook, FollowMe, Instagram, Logotipo, Row, TextOne, Location, Cellphone, Phone, Whats, FooterBox } from "./styles";

export const Footer = () => (
<>
   <BoxFooter>
        <Column>
            <Logotipo>
             LOGOTIPO
            </Logotipo>
            <TextOne>QUEM SOMOS</TextOne>
            <TextOne>GÔNDOLAS</TextOne>
            <TextOne>MÓVEIS DE AÇO</TextOne>
            <TextOne>ARMAZENAGEM</TextOne>
            <TextOne>CONTATO</TextOne>
        </Column>

        <Column>
            <TextOne>FAÇA SEU ORÇAMENTO </TextOne>
            <TextOne>SEJA UM COLABORADOR</TextOne>
            <br></br>
            <FollowMe>SIGA-NOS NAS REDES </FollowMe>
            <Row>
                <Facebook/>
                <Instagram/>
            </Row>
        </Column>

        <Column>
            <BoxInfo>LOJA • BH  (a 5km do centro!)</BoxInfo>
            <Location> Av. Professor Mário Werneck, 26 - 2° Andar <br/>
                       Belo Horizonte - MG, CEP: 30455-610<br/>
                       comercial@comercial.com.br
            </Location>
            <Cellphone> <Phone/> (31) 3333-3333 </Cellphone>
            <Cellphone> <Whats/> (31) 93333-3333 </Cellphone>
        </Column>

        <Column>
            <BoxInfo>LOJA • BH  (a 5km do centro!)</BoxInfo>
            <Location> Av. Professor Mário Werneck, 26 - 2° Andar <br/>
                       Belo Horizonte - MG, CEP: 30455-610<br/>
                       comercial@comercial.com.br
            </Location>
            <Cellphone> <Phone/> (31) 3333-3333 </Cellphone>
            <Cellphone> <Whats/>(31) 93333-3333 </Cellphone>
        </Column>

    </BoxFooter>

    <FooterBox></FooterBox>

</>
)