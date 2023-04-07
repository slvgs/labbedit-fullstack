import { useForm } from '../../hooks'
import { validateEmail, validateName, validatePassword } from '../../constants'
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



export const SignupPage = () => {


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



