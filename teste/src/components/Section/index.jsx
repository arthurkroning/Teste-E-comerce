import { ButtonMain } from "../Button";
import { LittleBox } from "../LittleBox";
import { Box, SectionTop, Tittle, Text, TextTwo, SectionBottom } from "./styles";

export const Section = () => {
    return (
        <section>
        <SectionTop>
            <Box>
                <Tittle>PRODUTOS DIRETO DA FÁBRICA!</Tittle>

                <Text>
                    Somos especialistas em gôndolas, porta pallets, racks,<br/>
                    roupeiros, estantes, e mais diversos outros itens<br/>
                    para organizar o armazenamento de produtos.
                </Text>

                <TextTwo>
                    Solicite seu orçamento agora e monte sua loja com <br/>
                    quem entende de aço!  
                </TextTwo>

                <ButtonMain width="300px" marginRight="40px" backgroundColor="#ffdd8a" borderColor="#ffdd8a" color="black">
                    QUERO FAZER UM ORÇAMENTO 
                </ButtonMain>

            </Box>
        </SectionTop>
        
        <SectionBottom>
            <LittleBox backgroundColor="#231f20" text="Quer ser um colaborador ou representante?" buttonText="prencha seus dados"/>
            <LittleBox backgroundColor="#231f20" text="Venda exclusiva para lojistas através do WhatsApp:" buttonText="converse com a gente"/>
            <LittleBox backgroundColor="#231f20" text="Gostou de algum dos nossos produtos?" buttonText="faça seu orçamento"/>
            <LittleBox backgroundColor="#231f20" text="Seja um revendedor agora mesmo!" buttonText="faça seu cadastro"/>
        </SectionBottom>

        </section>
    )

}