import React, {useState} from 'react'
import {Button, CategoryButton} from '../../components'
import MainContentHeader from "../mainContentHeader/MainContentHeader"

import "./findFavorite.css"

const FindFavorite = () => {

    const SearchButtonHandler = (event) => {
        event.preventDefault();
        const query = queryArray;

        console.log(query)
    }

    // let queryArray = [];
    const [queryArray, setQueryArray] = useState([]);

    const queryButtonHandler = (  queryText ) => {
        queryArray.includes(queryText) 
        ? setQueryArray(queryArray.filter(queryInArray => queryInArray !== queryText)) 
        : setQueryArray(oldArray => [...oldArray, queryText]);

    }

    return (
        <div className='findFavorite'>
            <MainContentHeader text="Find Your Favorite!" />
            <div className='findFavorite-content'>
                <h3>FindBy</h3>

                <div className='FindFavorite-querry-buttons'>
                    <div className='category-btn'>
                        <CategoryButton text="Launguage" action={queryButtonHandler} />
                    </div>
                    <div className='category-btn'>
                        <CategoryButton text="Subscribers" action={queryButtonHandler} />
                        
                    </div>
                    <div className='category-btn'>
                        <CategoryButton text="Category" action={queryButtonHandler} />
                    </div>
                </div>
                <div className='findFavorite-search-btn'>
                    <Button text="Search" action={SearchButtonHandler} />
                </div>

                <div>
                    {queryArray}
                </div>
            </div>

        </div>
    )
}

export default FindFavorite