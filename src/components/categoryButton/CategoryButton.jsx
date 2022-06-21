import React from 'react'

import "./categoryButton.css"

const CategoryButton = ({text, action}) => {

    const addQueryToArray = () => {

        action(text)
    }

  return (
    <div className='queryButton' onClick={addQueryToArray} >
        {text}
    </div>  )
}

export default CategoryButton