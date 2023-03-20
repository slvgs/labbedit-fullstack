import { extendTheme } from "@chakra-ui/react"

 export const theme = extendTheme({

    components: {
        Button: {
            variants: {
                header: {
                    bg: "laranja.500"

                },
                form: {
                    width: "100%",
                    bg: "laranja.500",
                    padding: "10px"
                }
            }
        }
    },

    colors: {
        laranja: {
            500: "#FE7E02"
        }
    }

})