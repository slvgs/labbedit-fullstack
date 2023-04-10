import axios from "axios"



export const BASE_URL = 'https://labook-backendii.onrender.com'



export const Login = async (body) => {

    const {data} = await axios.post(`${BASE_URL}/users/login`, body)

    return data


}

export const Signup = async (body) => {

    const {data} = await axios.post(`${BASE_URL}/users/signup`, body)

    return data

}


export const getPosts = async () => {


    const {data} = await axios.get(`${BASE_URL}/posts`, {

        headers: {
            Authorization: localStorage.getItem("labook.token")
        }


    })


    return data

}


export const CreatePosts = async (body) => {

    const {data} = await axios.post(`${BASE_URL}/posts`, body,

    {
        headers: {
            Authorization: localStorage.getItem("labook.token")
        }
    }
    
    
    
    )

    return data


}


export const ContentRep = async (body) => {

    const {data} = await axios.post(`${BASE_URL}/posts`, body,

    {
        headers: {
            Authorization: localStorage.getItem("labook.token")
        }
    }
    
    
    
    )

    return data

}


export const LikeContent = async (id, body) => {
    const {data} = await axios.post(`${BASE_URL}/posts/${id}/like`, body,

    {
        headers: {
            Authorization: localStorage.getItem("labook.token")
        }
    }
    
    
    
    )

    return data
}








export const validateEmail = (email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email))
export const validatePassword = (password =>/.{6,}/.test(password) )
export const validateName = name => /.{2,}/.test(name)