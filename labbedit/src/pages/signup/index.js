import { useForm } from '../../hooks'
import { Signup, validateEmail, validateName, validatePassword } from '../../constants'
import {
    CenteredPageContainer as SignupPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput,
    NameInput
} from '../../components'

import {

    Button,
   
} from '@chakra-ui/react'
import { useState } from 'react'
import logo from '../../assets/logo labbedit.png'
import { goToFeedPage } from '../../routes'
import { useNavigate } from 'react-router-dom'



export const SignupPage = () => {


    const navigate = useNavigate()


    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: "",
        name: ""
    })

   

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setPasswordValid] = useState(true)
    const [isNameValid, setNameValid] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setNameValid(validateName(form.name))
        setIsEmailValid(validateEmail(form.email))
        setPasswordValid(validatePassword(form.password));
        
               
        try {

            const {token} = isEmailValid && isPasswordValid && isNameValid && Signup({
                
                name: form.name,
                email: form.email,
                password: form.password
            
            
            })
            localStorage.setItem("labook.token", token)
            goToFeedPage(navigate)
            
        } catch (error) {
            console.log(error)
            
        }
    
    
    
    }


    return (
        <SignupPageContainer>

            <FormContainer>


                <form onSubmit={onSubmit}>
                    
                    
                    <img as= 'logo' src={logo} alt='logo do labbedit' />
                   
                   
                    <NameInput
                    
                    value={form.name}
                    onChange={onChangeInputs}
                    isValid={isNameValid}
        
                
                    />
                   
                   
                    <EmailInput 
                        value={form.email}
                        onChange={onChangeInputs}
                        isValid={isEmailValid}/>

                    <PasswordInput
                        value={form.password}
                        onChange={onChangeInputs}
                        isValid={isPasswordValid}
                       


                    />

                 

                  
                    <Button type='submit' variant='formMain'>Cadastrar</Button>

                </form>

            </FormContainer>


        </SignupPageContainer>
    )

}



