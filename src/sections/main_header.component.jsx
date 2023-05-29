import React from "react"
import styled from "styled-components"
import TextAnimation from "../components/animations/TextAnimation"


export default function MainHeader(){
    return(
        <div>
                <Title>Hello, I'm</Title>
                <Name>Eric Gilbert</Name>
                <TextAnimation/>
        </div>
    )
}




const Title = styled.h1`
    display: block;
    color: black;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 0%;
    padding-top: 0%;
`

const Name = styled.h2`
    display:block;
    color: rgb(75, 26, 133);
    font-size: 3.5rem;
    text-align: center;
    margin: 0%;
    padding: 0%;
`