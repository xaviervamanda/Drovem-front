import Header from "../components/Header";
import styled from "styled-components";
export default function RegisterPage (){
    return (
        <>
            <Header />
            <Container>
                <MainText>Cadastro de Estudante</MainText>
                <SubContainer>
                    <Label for="name">Nome:</Label>
                    <Input id="name"/>
                    <Label for="cpf">CPF:</Label>
                    <Input id="cpf"/>
                    <Label for="email">E-mail:</Label>
                    <Input id="email"/>
                    <Label for="foto">Foto:</Label>
                    <Input id="foto"/>
                    <Select>
                        <Option value="">Selecione a turma</Option>
                        <Option value="Turma A">Turma A</Option>
                        <Option value="Turma B">Turma A</Option>
                    </Select>
                    <Button>CADASTRAR</Button>
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
const SubContainer = styled.div`
display:flex;
flex-direction:column;
background: #0e0f0f;
width:50vw;
height:70vh;
margin-top:30px;
padding: 10px;
border-radius: 10px;
margin-bottom: 30px;
`
const Input = styled.input`
width: 80%;
height: 20px;
margin: 2px;
border-radius: 4px;
padding: 10px;
border: solid 1px #000;
margin: 0 auto;
`
const Label = styled.label`
width: 80%;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: 400;
color: #fff;
margin: 10px auto;
`
const Button = styled.button`
border: none;
border-radius: 4.63636px;
width: 50%;
height: 60px;
background-color:#53616B;
font-family: 'Roboto', sans-serif;
font-size: 1rem;
color:#fff;
font-weight: 600;
margin: 0 auto;
@media screen and (max-width: 900px){
    margin: 10px;
    height: 80px;
    width: 80%;
    position: static;
}
`
const Select = styled.select`
font-family: 'Roboto', sans-serif;
width:83%;
height:40px;
border-radius:5px;
border:none;
font-size: 16px;
color:black;
margin: 20px auto;
`
const Option = styled.option`
font-family: 'Roboto', sans-serif;
font-size: 16px;
`