import { FeedContainerStyled, PostCardStyled, PostContainerStyled } from "./styled"
import { useEffect, useState } from "react"
import { getPosts, LikeContent, CreatePosts, ContentRep } from "../../constants"
import { useForm } from '../../hooks'
import { useNavigate, useParams } from "react-router-dom"
import { AddContentBox, ContentInput, Header } from "../../components"
import { Button, Stack } from "@chakra-ui/react"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
// import {TbArrowBigUp, TbArrowBigDown} from "react-icons/tb"
import axios from "axios"
import { BASE_URL } from "../../constants"

export const FeedPage = () => {

    const navigate = useNavigate()
    const context = useContext(GlobalContext)



    const onClickLike = async () => {
        try{
            const body = {
                like: true
            }
            await axios.put(`${BASE_URL}/posts/${id}/like`, 
            body,
            {
                headers: {
                    Authorization: localStorage.getItem("labeddit.token")
                } 
            })
            getPosts()
            console.log({id})

        } catch (e) {
            console.log(e)
        }
    }








    const [form, onChangeInputs] = useForm({
        content: "",
    })

    const onSubmit = async(e) => {

        e.preventDefault()
        try {

            await CreatePosts({
                content: form.content
            })
            getPosts()
            .then(data => {
                setPosts(data)
                console.log(data)
            }).catch((e) => {

                console.log(e)
            })
            alert("Comentário feito com sucesso")
            
        } catch (error) {
            console.log("Aqui esta o erro", error)
            // alert(error.response.data)
            
        }





    }






    const [posts, setPosts] = useState([])
    const {id} = useParams()
    
    useEffect (() => {

        getPosts()
        .then(data => {

            setPosts(data)
             
        })
        .catch((e) => {
             console.log(e)
        });
 
        LikeContent(id)
 
 
 
     }, [])




    return (
        <FeedContainerStyled> 
            <PostContainerStyled>
                
                <form onSubmit={onSubmit}/>
                    <AddContentBox>

                        <ContentInput
                            value={form.content}
                            onChange={onChangeInputs}
                        
                        />

                        <Button
                            as="buttonPost"
                            type="submit"
                            variant="addContent"
                        
                        
                        >Postar</Button>
                        {posts.map((post, i) => {

                            <PostCardStyled key={i}>
                                <h3>{post.content}</h3>
                                <Stack direction='row' spacing={0}>
                                    <Button 
                                    // leftIcon={<TbArrowBigUp />}
                                    colorScheme='teal' 
                                    variant='contenReaction'>
                                        {post.likes}
                                    </Button>
                                    <Button 
                                    type="text"
                                    onClick={()=>{onClickLike()}}
                                    // leftIcon={<TbArrowBigDown />} 
                                    colorScheme='teal' 
                                    variant='contenReaction'>
                                        {post.dislikes}
                                    </Button>
                                    <Button 
                                        
                                        colorScheme='teal' 
                                        variant='contenReaction'
                                        
                                    >
                                    </Button>       
                                </Stack>
                            </PostCardStyled>

                        })}



                    </AddContentBox>
                    



                



            </PostContainerStyled>

            
            
            
             </FeedContainerStyled>
    )

}