import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/Loader";
import {IoIosWarning} from "react-icons/io";
export default function AllProjectsPage ({apiUrl}){

    const [classes, setClasses] = useState(null);
    const [projects, setProjects] = useState(null);
    const [className, setClassName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [studentsInfos, setStudentsInfos] = useState([]);
    const [projectId, setProjectId] = useState(null);
    const [classId, setclassId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`${apiUrl}/classes`)
            .then (res => {
                setClasses(res.data)
                
            })
            .catch (err => {
                console.log(err.response)
            })
        setClassName("Turma 1");
        setProjectName("Projeto A");
        axios.get(`${apiUrl}/projects`)
            .then (res => {
                setProjects(res.data);
            })
            .catch (err => {
                console.log(err.message);
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

    return (
        <>

            <Header />
            <PrincipalContainer>
                <ToastContainer/>
                <ContainerA>
                    <Choices>
                        {classes.map(c => (
                            <h2 onClick={() => {
                                setclassId(c.id)
                                setLoading(true);
                                setClassName(c.name)
                                console.log(c.id)
                            }}>{c.name}</h2>
                        ))}
                    </Choices>

                    <Choices>
                        {projects.map(p => (
                            <h2 onClick={() => {
                                setProjectId(p.id)
                                setLoading(true);
                                console.log(p.id)
                                setProjectName(p.name)
                            }}>{p.name}</h2>
                        ))}
                    </Choices>
                    
                </ContainerA>
                <ContainerB>
                    <MainText>{loading ? "Carregando..." : `${projectName} da ${className}`}</MainText>
                    {studentsInfos.map(s => (
                        <SubContainer>
                            <Image>
                                <img src={s.studentImage} alt="foto do estudante" />
                            </Image>
                            <p>{s.studentName}</p>
                            <h3>{s.grade}</h3>
                            {s.grade === "Sem Nota" ? <Icon/> : ""}
                        </SubContainer>
                    ))}
                </ContainerB>
            </PrincipalContainer>
        </>
    )
}

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
align-items:center;
justify-content:space-between;
background: #fff;
width:80%;
height:12vh;
padding: 10px;
border-radius: 10px;
margin-bottom: 30px;
position:relative;
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