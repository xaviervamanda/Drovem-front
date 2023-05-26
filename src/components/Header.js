import styled from "styled-components";
import logo from "../assets/logo.png";
import name from "../assets/name.png";
import {GoThreeBars} from "react-icons/go";

export default function Header (){
    return (
        <> 
            <TopBar>
                <Icon/>
                <Name src={name} alt="bussines name"/>
                <Logo src={logo} alt="logo" />
            </TopBar>

        </>
    )
}

const TopBar = styled.header`
z-index: 1;
position:fixed;
left:0px;
top:0px;
width:100vw;
height:100px;
display:flex;
justify-content:space-between;
background-color:#0e0f0f;
align-items:center;
align-content:center;
font-family: 'cookie', sans-serif;
font-weight: 400;
font-size: 62px;
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
`
const Logo = styled.img`
max-height:7rem;
max-width:7rem;
margin-right:1rem;
`
const Name = styled.img`
max-height:12rem;
max-width:12rem;
`
const Icon = styled(GoThreeBars)`
font-size:3rem;
color:#53616B;
margin-left:1rem;
`
