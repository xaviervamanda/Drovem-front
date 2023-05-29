import { ColorRing } from "react-loader-spinner";
import styled from "styled-components";

export default function Loader (){
    return (
        <SpinnerWrapper>
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
            />
        </SpinnerWrapper>
    )
}

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`