import { useForm } from '../../hooks'
import { validateEmail, validatePassword } from '../../constants'
import {
    CenteredPageContainer as LoginPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput
} from '../../components'

import {

    Button,
   
} from '@chakra-ui/react'
import { useState } from 'react'
import logo from '../../assets/logo labbedit.png'



export const LoginPage = () => {


    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: ""
    })

   

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setPasswordValid] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(validateEmail(form.email))
        setPasswordValid(validatePassword(form.password));
    }


    return (
        <LoginPageContainer>

            <FormContainer>


                <form onSubmit={onSubmit}>
                    
                    
                    <img as= 'logo' src={logo} alt='logo do labbedit' />
                    <EmailInput 
                        value={form.email}
                        onChange={onChangeInputs}
                        isValid={isEmailValid}/>

                    <PasswordInput
                        value={form.password}
                        onChange={onChangeInputs}
                        isValid={isPasswordValid}
                       


                    />
                  
                    <Button type='submit' variant='formMain'>Enviar</Button>
                    <Button type='cadastrar' variant='formSecondary'>Não tem uma conta? Cadastre-se Já!</Button>

                </form>

            </FormContainer>


        </LoginPageContainer>
    )

}