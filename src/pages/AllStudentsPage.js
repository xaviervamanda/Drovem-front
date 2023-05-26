import Header from "../components/Header";
import styled from "styled-components";
export default function AllStudentsPage (){
    return (
        <>

            <Header />
            <PrincipalContainer>
                <ContainerA>
                    <h2>Turma 1</h2>
                    <h2>Turma 2</h2>
                    <h2>Turma 1</h2>
                    <h2>Turma 1</h2>
                    <h2>Turma 1</h2>
                </ContainerA>
                <ContainerB>
                    <MainText>Estudantes da Turma 2</MainText>
                    <SubContainer>
                        <Image>
                            <img src="https://blogcarreiras.cruzeirodosuleducacional.edu.br/wp-content/uploads/2020/12/perfil-de-aluno.jpeg" alt="foto do estudante" />
                        </Image>
                        <p>FULANO DE TAL</p>
                    </SubContainer>
                    <SubContainer>
                        <Image>
                            <img src="https://blogcarreiras.cruzeirodosuleducacional.edu.br/wp-content/uploads/2020/12/perfil-de-aluno.jpeg" alt="foto do estudante" />
                        </Image>
                        <p>FULANO DE TAL</p>
                    </SubContainer>
                    <SubContainer>
                        <Image>
                            <img src="https://blogcarreiras.cruzeirodosuleducacional.edu.br/wp-content/uploads/2020/12/perfil-de-aluno.jpeg" alt="foto do estudante" />
                        </Image>
                        <p>FULANO DE TAL</p>
                    </SubContainer>
                    <SubContainer>
                        <Image>
                            <img src="https://blogcarreiras.cruzeirodosuleducacional.edu.br/wp-content/uploads/2020/12/perfil-de-aluno.jpeg" alt="foto do estudante" />
                        </Image>
                        <p>FULANO DE TAL</p>
                    </SubContainer>

                </ContainerB>
            </PrincipalContainer>
        </>
    )
}

const PrincipalContainer = styled.div`
display:flex;
`
const ContainerA = styled.main`
display:flex;
flex-direction:column;
align-items:center;
background: #53616b;
width:30vw;
margin-top: 100px;
padding-top:50px;
border: 1px solid #222;
h2{
   margin: 10px;
   font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400; 
}
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
`
const ContainerB = styled.main`
display:flex;
flex-direction:column;
align-items:center;
background: #53616b;
width:70vw;
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
margin-bottom: 20px;
@media screen and (max-width: 900px){
    height: 80px;
    width: 80%;
    margin-top: 150px;
    margin-left: 130px;
    position: static;
}
`
const Image = styled.div`
width: 80px;
height: 80px;
border-radius: 50%;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
`
const SubContainer = styled.div`
display:flex;
background: #fff;
width:80%;
height:12vh;
padding: 10px;
border-radius: 10px;
margin-bottom: 30px;
p{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: auto 20px;
}
@media screen and (max-width: 800px){
    width: 40%;
}
`