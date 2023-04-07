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



export const PasswordInput = ({isValid, value, onChange}) => {




    
    const [showPassword, setShowPassword] = useState(false)


    const onClickShowPassword = () => {
        setShowPassword(!showPassword)

    }
         return (

            <FormControl isInvalid={!isValid}>
                <FormLabel>Senha</FormLabel>

            <InputGroup size='md'>
                <Input
                    name="password"
                    value={value}
                    onChange={onChange}
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
            {!isValid ? (
                <FormErrorMessage as="p">
                   A Senha deve conter no minimo 6 caracteres!
                </FormErrorMessage>
            ) : undefined}


        </FormControl>


     

    )
}

