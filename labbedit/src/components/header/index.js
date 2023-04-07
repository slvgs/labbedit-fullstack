import { Button } from "@chakra-ui/react"
import { HeaderStyled } from "./styled"
import { goToFeedPage, goToLoginPage } from "../../routes"
import { useNavigate } from "react-router-dom"

export const Header = () =>{

    const navigate = useNavigate()

    return(

        <HeaderStyled>
            <Button onClick={() => goToFeedPage(navigate)} variant='header'>Labbedit</Button>
            <Button onClick={() => goToLoginPage(navigate)} variant='header'>Login</Button>
        </HeaderStyled>
    )

}