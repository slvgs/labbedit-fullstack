import styled from "styled-components";



export const CenteredPageContainer = styled.div`

    height: 88vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;





`


export const PageContainer = styled.div`
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF
`;

export const FormContainer = styled.div`
    
    min-width: 40vw;
    max-width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    padding: 10px;

    input, p{
        margin-bottom:6px ;
    }

    img{
        
      
      
        display: block;
        margin-left: auto;
        margin-right: auto;
       
    }
    

    



`


export const AddContentBox = styled.div`
    min-width: 40vw;
    max-width: 98vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
   Button{
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    width: 40vw;

    


   }
   
    
   
`