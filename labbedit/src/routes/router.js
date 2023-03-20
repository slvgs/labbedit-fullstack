import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginPage,
    SignupPage,
    FeedPage,
    AddPostPage,
    PostDetailPage

} from '../pages'
import { Header } from '../components';




export const Router =() => {
    return (

        <BrowserRouter>

            <Header/>

            <Routes>
               
                <Route  path='/login' element={<LoginPage/>}/>
                <Route  path='/signup' element={<SignupPage/>}/>
                <Route  path='/feed' element={<FeedPage/>}/>
                <Route  path='/add-post' element={<AddPostPage/>}/>
                <Route  path='/post/:id' element={<PostDetailPage/>}/>




            </Routes>





        </BrowserRouter>




    )
}