import React from 'react'
import {Button} from '../../components'
import MainContentHeader from "../mainContentHeader/MainContentHeader"

import "./findFavorite.css"

const FindFavorite = () => {

    const buttonHandler = () => {
        console.log("search button clicked")
    }

    return (
        <div className='findFavorite'>
            <MainContentHeader text="Find Your Favorite!" />
            <div className='findFavorite-content'>
                <h3>FindBy</h3>
                <p>Any Text</p>
            </div>

            <Button text="Search" action={buttonHandler} />
            </div>
    )
}

export default FindFavorite