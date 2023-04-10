import { Button } from "@chakra-ui/react"
import { HeaderStyled } from "./styled"
import { goToFeedPage, goToLoginPage } from "../../routes"
import { useNavigate } from "react-router-dom"
import logo from '../../assets/logopeqLabbedit.png'

export const Header = () =>{

    const navigate = useNavigate()

    return(

        <HeaderStyled>
            
            <Button onClick={() => goToFeedPage(navigate)} variant='header'>Home</Button>
            <img as= 'logo' src={logo} alt='logo do labbedit' />
            <Button onClick={() => goToLoginPage(navigate)} variant='header'>Login</Button>
        </HeaderStyled>
    )

}