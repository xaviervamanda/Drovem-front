import { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";
import Loader from "../components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
export default function AllStudentsPage ({apiUrl, setStudentId, studentId}){

    const [classes, setClasses] = useState(null);
    const [studentsInfos, setStudentsInfos] = useState([]);
    const [className, setClassName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${apiUrl}/classes`)
            .then (res => {
                setClasses(res.data)
            })
            .catch (err => {
                toast.error("An error occurred. Try again later.", { autoClose: 3000 });
            })
        setClassName("Turma 1");
        axios.get(`${apiUrl}/students/classes/1`)
        .then(res => {
            setStudentsInfos(res.data);
        })
        .catch(err => {
            toast.error("An error occurred. Try again later.", { autoClose: 3000 });
        })
    }, []);

    if (classes === null){
        return (
            <>

            <Header />
            <PrincipalContainer>
                <ContainerA>
                </ContainerA>
                <ContainerB>
                    <MainText>Estudantes da Turma 1</MainText>
                    <Loader/>
                </ContainerB>
            </PrincipalContainer>
        </>
        )
    }

    function handleClickClassName(id, className){
        setClassName(className);
        axios.get(`${apiUrl}/students/classes/${id}`)
            .then(res => {
                setStudentsInfos(res.data);
            })
            .catch(err => {
                toast.error(err.response.data, { autoClose: 3000 });
            })
    }


    return (
        <>

            <Header />
            <PrincipalContainer>
                <ToastContainer/>
                <ContainerA>
                    {classes.map((c) => (
                        <h2 onClick={() => handleClickClassName(c.id, c.name)}>{c.name}</h2>
                    ))}
                </ContainerA>
                <ContainerB>
                    <MainText>Estudantes da {className}</MainText>
                    {studentsInfos.map(s => (
                        <SubContainer onClick={() => {
                            setStudentId(s.studentId)
                            navigate("/student")
                        }}>
                            <Image>
                                <img src={s.studentImage} alt="foto do estudante" />
                            </Image>
                            <p>{s.studentName}</p>
                        </SubContainer>
                    ))}

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
height: 100vh;
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
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    margin-top: 150px;
}
@media screen and (max-width: 400px){
    width: 50%;
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
align-items:center;
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
`