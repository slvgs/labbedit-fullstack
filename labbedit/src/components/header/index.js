import { Button } from "@chakra-ui/react"
import { HeaderStyled } from "./styled"


export const Header = () =>{

    return(

        <HeaderStyled>
            <Button variant='header'>Labbedit</Button>
            <Button variant='header'>Login</Button>
        </HeaderStyled>
    )

}