import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/Loader";
import {IoIosWarning} from "react-icons/io";
import {AiFillCloseCircle} from "react-icons/ai";
export default function AllProjectsPage ({apiUrl}){

    const [classes, setClasses] = useState(null);
    const [projects, setProjects] = useState(null);
    const [className, setClassName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [studentsInfos, setStudentsInfos] = useState([]);
    const [projectId, setProjectId] = useState(null);
    const [classId, setclassId] = useState(null);
    const [studentId, setStudentId] = useState("");
    const [loading, setLoading] = useState(false);
    const [containerGradesOpen, setContainerGradesOpen] = useState(false);

    useEffect(() => {
        axios.get(`${apiUrl}/classes`)
            .then (res => {
                setClasses(res.data)
                
            })
            .catch (err => {
                toast.error("An error occurred. Try again later.", { autoClose: 3000 });
            })
        setClassName("Turma 1");
        setProjectName("Projeto A");
        axios.get(`${apiUrl}/projects`)
            .then (res => {
                setProjects(res.data);
            })
            .catch (err => {
                toast.error("An error occurred. Try again later.", { autoClose: 3000 });
            })
        axios.get(`${apiUrl}/students/classes/1`)
            .then(res => {
                setStudentsInfos(res.data);
            })
            .catch(err => {
                toast.error(err.response.data, { autoClose: 3000 });
            })

    }, []);

    useEffect(() => {
        if (projectId !== null && classId !== null) {
          handleClickClassAndProject();
        }
      }, [projectId, classId]);

    if (classes === null || projects === null){
        return (
            <>
            <Header />
            <PrincipalContainer>
                <ContainerA>
                </ContainerA>
                <ContainerB>
                    <MainText>Projeto A da Turma 1</MainText>
                    <Loader/>
                </ContainerB>
            </PrincipalContainer>
        </>
        )
    }

    function handleClickClassAndProject(){
        setLoading(true);
        axios.get(`${apiUrl}/projects/${projectId}/classes/${classId}`)
            .then(res => {
                setStudentsInfos(res.data);
                setProjectId(null);
                setclassId(null);
                setLoading(false);
            })
            .catch(err => {
                toast.error(err.response.data, { autoClose: 3000 });
                setLoading(false);
            })
    }

    function handleUpdateGrade(grade){
        axios.put(`${apiUrl}/projects/${studentId}`, {grade})
        .then(res => {
            toast("Alteração na nota realizada com sucesso!", { autoClose: 3000 });
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
                    <Choices>
                        {classes.map(c => (
                            <h2 key={c.id} onClick={() => {
                                setclassId(c.id)
                                setLoading(true);
                                setClassName(c.name)
                            }}>{c.name}</h2>
                        ))}
                    </Choices>

                    <Choices>
                        {projects.map(p => (
                            <h2 key={p.id} onClick={() => {
                                setProjectId(p.id)
                                setLoading(true);
                                setProjectName(p.name)
                            }}>{p.name}</h2>
                        ))}
                    </Choices>
                    
                </ContainerA>
                <ContainerB>
                    <MainText>{loading ? "Carregando..." : `${projectName} da ${className}`}</MainText>
                    <ContainerGrades containerGradesOpen={containerGradesOpen} >
                        <Close onClick={() => setContainerGradesOpen(false)}/>
                        <Options onClick={() => handleUpdateGrade("Acima das Expectativas")}>Acima das Expectativas</Options>
                        <Options onClick={() => handleUpdateGrade("Abaixo das Expectativas")}>Abaixo das Expectativas</Options>
                        <Options onClick={() => handleUpdateGrade("Sem Nota")}>Sem Nota</Options>
                    </ContainerGrades>
                    {studentsInfos.map((s, index) => (
                        <SubContainer key={index}>
                            <Image>
                                <img src={s.studentImage} alt="foto do estudante" />
                            </Image>
                            <p>{s.studentName}</p>
                            {s.grade === "Sem Nota" ? <h3 onClick={() => {
                                setContainerGradesOpen(true)
                                setStudentId(s.studentProjectId)
                                }}>{s.grade}</h3> : <h3>{s.grade}</h3>}
                            {s.grade === "Sem Nota" ? <Icon onClick={() => {
                                setContainerGradesOpen(true)
                                setStudentId(s.studentProjectId)
                                }}/> : ""}
                        </SubContainer>
                    ))}
                </ContainerB>
            </PrincipalContainer>
        </>
    )
}

const Close = styled(AiFillCloseCircle)`
width: 25px;
height: 25px;
color: #33634C;
position:absolute;
top:5%;
right:5%;
`
const ContainerGrades = styled.div`
position: absolute;
font-family: 'Roboto', sans-serif;
font-size: 1rem;
font-weight: 400;
display:flex;
flex-direction:column;
background: #0E0F0F;
width:40vw;
height:40vh;
margin-top:170px;
padding: 10px;
padding-top:30px;
border-radius: 2px;
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
opacity: 0.95;
position:fixed;
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
z-index: 2;
display: ${props => props.containerGradesOpen ? "flex" : "none"};
`
const Options = styled.div`
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

const Icon = styled(IoIosWarning)`
width: 20px;
height: 20px;
position:absolute;
top:40%;
right:15%;
@media screen and (max-width: 1200px){
    position:absolute;
    top:40%;
    right:3%
}
`

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
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
@media screen and (max-width: 600px){
    width: 20vh;
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
@media screen and (max-width: 600px){
    width: 80vh;
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
justify-content:space-between;
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
}
h3{
    box-sizing: border-box;
    width: 25%;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
}
@media screen and (max-width: 1000px){
    p{
        margin: 0px;
    }
    h3{
        margin: 0px;
    }
}
`