import Header from "../components/Header";
import styled from "styled-components";

export default function StudentPage (){
    return (
        <>

            <Header />
            <Container>
                <MainText>Registro de Estudante</MainText>
                <Image>
                    <img src="https://blogcarreiras.cruzeirodosuleducacional.edu.br/wp-content/uploads/2020/12/perfil-de-aluno.jpeg" alt="foto do estudante" />
                </Image>
                <Text>Nome completo: FULANO DE TAL</Text>
                <Text>CPF: 111.111.111-11</Text>
                <Text>E-mail: fulano@detal.com.br</Text>
                <Text>Turmas:</Text>
                <SubContainer>
                    <p><strong>Turma 02</strong></p>
                    <p>Data de ingresso: 02/03/2023</p>
                    <p>Data de saída: -</p>
                </SubContainer>
                <SubContainer>
                    <p><strong>Turma 01</strong></p>
                    <p>Data de ingresso: 02/02/2022</p>
                    <p>Data de saída: 25/05/2022</p>
                </SubContainer>
            </Container>
        
        </>
    )
}

const Container = styled.main`
display:flex;
flex-direction:column;
align-items:center;
background: #53616b;
width:100vw;
// height:100vh;
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
`
const MainText = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 2rem;
font-weight: 700;
color: #222;
margin-top: 150px;
@media screen and (max-width: 900px){
    height: 80px;
    width: 80%;
    margin-top: 150px;
    margin-left: 130px;
    position: static;
}
`
const Image = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
overflow: hidden;
margin: 20px auto;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
`
const Text = styled.h2`
font-family: 'Roboto', sans-serif;
font-size: 1rem;
font-weight: 400;
width: 20vw;
margin: 10px auto;
@media screen and (max-width: 800px){
    width: 40%;
}
`
const SubContainer = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 1rem;
font-weight: 400;
display:flex;
flex-direction:column;
background: #fff;
width:16vw;
height:10vh;
padding: 10px;
border-radius: 10px;
margin-bottom: 30px;
p{
    margin: 2px;
}
@media screen and (max-width: 800px){
    width: 40%;
}
`