import { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/Loader";

export default function StudentPage ({apiUrl, studentId}){

    const [studentinfos, setStudentInfos] = useState(null);

    useEffect(() => {
        axios.get(`${apiUrl}/students/${studentId}`)
            .then(res => {
                setStudentInfos(res.data);
            })
            .catch(err => {
                toast.error(err.message, { autoClose: 3000 });
            })
    }, [])

    if (studentinfos === null){
        return (
            <>

            <Header />
            <Container>
                <ToastContainer/>
                <MainText>Registro de Estudante</MainText>
                <Loader/>
            </Container>
        
        </>
        )
    }

    return (
        <>

            <Header />
            <Container>
                <ToastContainer/>
                <MainText>Registro de Estudante</MainText>
                <Image>
                    <img src={studentinfos.student.image} alt="foto do estudante" />
                </Image>
                <Text>Nome completo: {studentinfos.student.name}</Text>
                <Text>CPF: {studentinfos.student.cpf}</Text>
                <Text>E-mail: {studentinfos.student.email}</Text>
                <Text>Turmas:</Text>
                {studentinfos.Studentclasses.map(c => (
                    <SubContainer>
                        <p><strong>{c.className}</strong></p>
                        <p>Data de ingresso: {c.startDate.slice(0, 10)}</p>
                        <p>Data de saída: {c.endDate === null ? "-" : c.endDate.slice(0, 10)}</p>
                    </SubContainer>
                ))}
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