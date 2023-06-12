import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { useInterval } from "react-use";


export default function TextAnimation(){
    const title_arr = ['Data Engineer', 'Software Engineer', 'Data Scientist', 'Data Analyst']
    const [count, setCount] = useState(0)
    const [play, setPlay] = useState(false)

    useInterval(
        () => {
            setCount(count + 1)

            if (count === title_arr.length - 1){
                setCount(0)
            }
        },
        play ? 4000 : null
    )

    useEffect(() =>{
        const timer = setTimeout(() => {
            setPlay(true)
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

    return (
    <Wrapper>{title_arr[count]}</Wrapper>
 )
}

const animation = keyframes`
    0% {opacity: 0;}
    25% {opacity: 1;}
    75% {opacity: 1;}
    100% {opacity: 0}
`

const Wrapper = styled.p`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    text-align: center;
    font-size: 2.5rem;
    display: block;
`