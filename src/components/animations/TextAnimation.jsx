import React from "react";
import styled, { keyframes } from "styled-components";

export default function TextAnimation(){
    return <Wrapper>Data Engineer</Wrapper>
}

const animation = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1}
`

const Wrapper = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    text-align: center;
    font-size: 2.5rem;
`