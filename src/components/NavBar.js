import styled from "styled-components";
import { Link } from "react-router-dom";
export default function NavBar ({open}){
    return (
        <Container open={open}>
            <ContentContainer>
                <CustomLink to="/"><Pages>Cadastro de estudante</Pages></CustomLink>
                <CustomLink to="/students"><Pages>Lista de estudantes por turma</Pages></CustomLink>
                <CustomLink to="/student"><Pages>Perfil de estudante</Pages></CustomLink>
                <CustomLink to="/project"><Pages>Entrega de projeto</Pages></CustomLink>
                <CustomLink to="/projects"><Pages>Lista de projetos</Pages></CustomLink>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
display:flex;
flex-direction:column;
background: #53616B;
width:40vw;
height:100vh;
margin-top:100px;
padding: 10px;
padding-top:30px;
border-radius: 2px;
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
position:fixed;
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
z-index: 2;
display: ${props => props.open ? "flex" : "none"};
`
const Pages = styled.div`
width: 80%;
height: 80px;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: 700;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px auto;
background: #33634C;
border-radius: 5px;
border: 2px solid black;
`
const CustomLink = styled(Link)`
text-decoration:none;
`
const ContentContainer = styled.div`
overflow-y: auto;
height: calc(100% - 50px);
`