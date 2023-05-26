import Header from "../components/Header";
import styled from "styled-components";
export default function AllProjectsPage (){
    return (
        <>

            <Header />
            <PrincipalContainer>
                <ContainerA>
                    <Choices>
                        <h2>Turma 1</h2>
                        <h2>Turma 2</h2>
                        <h2>Turma 1</h2>
                        <h2>Turma 1</h2>
                        <h2>Turma 1</h2>
                    </Choices>

                    <Choices>
                        <h2>Projeto A</h2>
                        <h2>Projeto A</h2>
                        <h2>Projeto A</h2>
                        <h2>Projeto A</h2>
                        <h2>Projeto A</h2>
                    </Choices>
                    
                </ContainerA>
                <ContainerB>
                    <MainText>Projeto A da Turma 2</MainText>
                    <SubContainer>
                        <Image>
                            <img src="https://blogcarreiras.cruzeirodosuleducacional.edu.br/wp-content/uploads/2020/12/perfil-de-aluno.jpeg" alt="foto do estudante" />
                        </Image>
                        <p>FULANO DE TAL</p>
                        <h3>Sem nota</h3>
                    </SubContainer>
                    <SubContainer>
                        <Image>
                            <img src="https://blogcarreiras.cruzeirodosuleducacional.edu.br/wp-content/uploads/2020/12/perfil-de-aluno.jpeg" alt="foto do estudante" />
                        </Image>
                        <p>FULANO DE TAL</p>
                        <h3>Abaixo das Expectativas</h3>
                    </SubContainer>
                    <SubContainer>
                        <Image>
                            <img src="https://blogcarreiras.cruzeirodosuleducacional.edu.br/wp-content/uploads/2020/12/perfil-de-aluno.jpeg" alt="foto do estudante" />
                        </Image>
                        <p>FULANO DE TAL</p>
                        <h3>Acima das Expectativas</h3>
                    </SubContainer>
                    <SubContainer>
                        <Image>
                            <img src="https://blogcarreiras.cruzeirodosuleducacional.edu.br/wp-content/uploads/2020/12/perfil-de-aluno.jpeg" alt="foto do estudante" />
                        </Image>
                        <p>FULANO DE TAL</p>
                        <h3>Sem nota</h3>
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
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
`
const Choices = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
font-family: 'Roboto', sans-serif;
width:30vw;
height: 50%;
font-size: 1rem;
font-weight: 400; 
h2{
    margin: 10px;
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
    height: 50%;
}
h3{
    width: 25%;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: auto 20px;
    margin-left: 300px;
}
@media screen and (max-width: 1000px){
    width: 80%;
    overflow: hidden;
    justify-content: space-between;
    align-itens: center;
    p{
        margin: 0px;
    }
    h3{
        margin: 0px;
    }
}
`