import { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
export default function RegisterPage ({apiUrl}){

    const initialState = {
        name: "",
        cpf: "",
        email: "",
        image: "",
        className: ""
    };
    

    const [classes, setClasses] = useState(null);
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`${apiUrl}/classes`)
            .then (res => {
                setClasses(res.data)
            })
            .catch (err => {
                toast.error("An error occurred. Try again later.", { autoClose: 3000 });
            })
    }, [])

    if (classes === null) {
        return (
            <>
            <Header />
            <Container>
                <MainText>Cadastro de Estudante</MainText>
                <Loader/>
            </Container>
            </>
        )
    }

      function handleForm(e) {
        e.preventDefault();
        const body = { ...formData };
        axios
          .post(`${apiUrl}/students`, body)
          .then((res) => {
            setFormData(initialState);
            toast("Estudante cadastrado com sucesso!", { autoClose: 1500 });
            navigate("/students");
          })
          .catch((err) => {
            toast.error(err.response.data);
          });
      }

    return (
        <>
            <Header />
            <Container>
                <MainText>Cadastro de Estudante</MainText>
                <SubContainer onSubmit={handleForm}>
                    <Label htmlFor="name">Nome:</Label>
                    <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Label htmlFor="cpf">CPF:</Label>
                    <Input
                        id="cpf"
                        value={formData.cpf}
                        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                    />
                    <Label htmlFor="email">E-mail:</Label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Label htmlFor="foto">Foto:</Label>
                    <Input
                        id="foto"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                    <Select
                        value={formData.className}
                        onChange={(e) =>
                        setFormData({ ...formData, className: e.target.value })
                        }
                    >
                        <Option value="">Selecione a turma</Option>
                        {classes.map((classe, index) => (
                            <Option key={index} value={classe.name}>{classe.name}</Option>
                        ))}
                    </Select>
                    <Button>CADASTRAR</Button>
                </SubContainer>
                <ToastContainer/>
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
height:100vh;
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
    width: 100%;
    margin-top: 150px;
    text-align: center;
}
`
const SubContainer = styled.form`
display:flex;
flex-direction:column;
background: #0e0f0f;
width:50vw;
margin-top:30px;
padding: 50px 0;
border-radius: 10px;
margin-bottom: 30px;
@media screen and (max-width: 700px){
    width: 80%;
}
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