import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'


export const EmailInput = ({isValid, value, onChange}) => {


    return (


        <FormControl isInvalid={!isValid}>
            <FormLabel>Email</FormLabel>
            <Input
                name='email'
                /* type='email' */
                value={value}
                onChange={onChange}
                placeholder="email"

            />

            {!isValid ? (
                <FormErrorMessage as="p">
                    E-mail Inválido
                </FormErrorMessage>
            ) : undefined}
        </FormControl>

    )
}