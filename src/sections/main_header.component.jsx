import React from "react"
import styled from "styled-components"
import TextAnimation from "../components/animations/TextAnimation"


export default function MainHeader(){
    return(
        <MainHeaderContainer>
                <Title>Hello, I'm</Title>
                <Name>Eric Gilbert</Name>
                <TextAnimation/>
        </MainHeaderContainer>
    )
}

const MainHeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`

const Title = styled.h1`
    color: black;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 0%;
    padding-top: 0%;
    display: block;
`

const Name = styled.h2`
    color: rgb(75, 26, 133);
    font-size: 3.5rem;
    text-align: center;
    margin: 0%;
    padding: 0%;
    display:block;
`