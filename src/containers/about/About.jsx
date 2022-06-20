import React from 'react'
import {Button} from '../../components'
import MainContentHeader from "../mainContentHeader/MainContentHeader"

import "./about.css"

const About = () => {

    const buttonHandler = () => {
        alert("button clicked")
    }

    return (
        <div className='about'>
            <MainContentHeader text="Welcome to FavYoutuber!" />
            <div className='about-content'>
                <h3>About</h3>
                <p>Any Text</p>
            </div>

            <Button text="Let’s Find" action={buttonHandler} />
        </div>
    )
}

export default About