import { useForm } from '../../hooks'
import {
    LoginPageContainer,
    FormContainer
} from './styled'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import { useState } from 'react'



export const LoginPage = () => {


    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))

    }

    const [showPassword, setShowPassword] = useState(false)


    const onClickShowPassword = () => {
        setShowPassword(!showPassword)

    }

    return (
        <LoginPageContainer>

            <FormContainer>

                <form onSubmit={onSubmit}>

                    <FormControl isInvalid={!isEmailValid}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            name='email'
                            /* type='email' */
                            value={form.email}
                            onChange={onChangeInputs}
                            placeholder="email"

                        />

                        {!isEmailValid ? (
                            <FormErrorMessage as="p">
                                E-mail Inválido
                            </FormErrorMessage>
                        ) : undefined}
                    </FormControl>
                    <FormControl>

                        <InputGroup size='md'>
                            <Input
                                name="password"
                                value={form.password}
                                onChange={onChangeInputs}
                                pr='4.5rem'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Senha com no mininimo 6 caracteres'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={onClickShowPassword}>
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>





                    </FormControl>
                    <Button type='submit' variant='form'>Enviar</Button>

                </form>

            </FormContainer>


        </LoginPageContainer>
    )

}