import { Block, Column, Condition, Container, Description, DiscountPrice, Image, ImageContainer, Off, Price, Row } from "./style";


export const Card = ({src,alt,isPromotion,description,price,condition,originalPrice}) => (
    <Container>
        <Block>
            <ImageContainer>
                <Image src={src} alt={alt} />
            { isPromotion && <Off><span>%OFF</span></Off>}
            </ImageContainer>
        </Block>
        
      
        <Column>
            <Description>
                {description}
            </Description>
        <Row>
            <DiscountPrice>
                {originalPrice}
            </DiscountPrice>
            <Price>
                {price}
            </Price>
        </Row>
            <Condition>
                {condition}
            </Condition>

        </Column>
        
    </Container>


    )