import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ProjectPage ({apiUrl}){

    const initialState = {
        className: "",
        studentName: "",
        projectName: "",
        link: ""
    };
    
    const [formData, setFormData] = useState(initialState);
    const [classes, setClasses] = useState(null);
    const [projects, setProjects] = useState(null);
    const [students, setStudents] = useState(null);

    useEffect(() => {
       axios.get(`${apiUrl}/classes`)
           .then (res => {
               setClasses(res.data);
           })
           .catch (err => {
                toast.error("An error occurred. Try again later.", { autoClose: 3000 });
           })
        axios.get(`${apiUrl}/projects`)
        .then (res => {
            setProjects(res.data);
        })
        .catch (err => {
            toast.error("An error occurred. Try again later.", { autoClose: 3000 });
        })
    }, [])

    function handleForm(e){
        e.preventDefault();
        const body = {...formData};
        axios.post(`${apiUrl}/projects`, body)
            .then(res => {
                toast("Projeto entregue com sucesso!", { autoClose: 1500 });
                setFormData(initialState);
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    function getStudents(classId){
        axios.get(`${apiUrl}/students/classes/${classId}`)
        .then (res => {
            setStudents(res.data);
        })
        .catch (err => {
            toast.error("An error occurred. Try again later.", { autoClose: 3000 });
        })
    }

    if (classes === null || projects === null){
        return (
            <>

            <Header />
            <Container>
                <MainText>Entrega de Projeto</MainText>
                <Loader/>
            </Container>
        
        </>
        )
    }

    return (
        <>
            <Header />
            <Container>
                <MainText>Entrega de Projeto</MainText>
                <ToastContainer/>
                <SubContainer onSubmit={handleForm}>
                    <Label htmlFor="class">Selecione a Turma:</Label>
                    <Select id="class" value={formData.className}
                        onChange={(e) => {
                            const selectedClass = classes.find((c) => c.name === e.target.value);
                            setFormData({ ...formData, className: selectedClass.name });
                            getStudents(selectedClass.id);
                        }}>
                        <Option value=""></Option>
                        {classes.map((c) => (
                            <Option value={c.name} >{c.name}</Option>
                        ))}
                    </Select>
                    <Label htmlFor="name">Selecione o Nome:</Label>
                    <Select id="name" value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}>
                        <Option value=""></Option>
                        {students === null ? (<Option value=""></Option>) : (
                            students.map((s) => (
                            <Option value={s.studentName} >{s.studentName}</Option>
                            ))
                        )}
                    </Select>
                    <Label htmlFor="project">Selecione o Projeto:</Label>
                    <Select id="project" value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}>
                        <Option value=""></Option>
                        {projects.map((p) => (
                            <Option value={p.name} >{p.name}</Option>
                        ))}
                    </Select>
                    <Label htmlFor="link">Link do Projeto</Label>
                    <Input id="link" value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}/>
                    <Button>ENTREGAR</Button>
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
margin-bottom: 30px;
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
    margin: 10px auto;
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
margin: 0px auto;
margin-bottom: 10px;
`
const Option = styled.option`
font-family: 'Roboto', sans-serif;
font-size: 16px;
`