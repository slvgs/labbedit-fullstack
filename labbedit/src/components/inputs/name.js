import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'


export const NameInput = ({isValid, value, onChange}) => {


    return (


        <FormControl isInvalid={!isValid}>
            <FormLabel>Nome</FormLabel>
            <Input
                name='name'
                /* type='email' */
                value={value}
                onChange={onChange}
                placeholder="Nome Completo"

            />

            {!isValid ? (
                <FormErrorMessage as="p">
                    O campo nome deve conter ao menos 2 caracteres!
                </FormErrorMessage>
            ) : undefined}
        </FormControl>

    )
}