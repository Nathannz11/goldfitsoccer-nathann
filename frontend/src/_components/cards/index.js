import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from '../../_components/dropdown-menu'

import './styles.css'

export default ({id, photo, name, date, position, club}) => {

    return(
        <div className='card-container'>
            <div className="card-athlete">
                <p className='card-athlete-id'>{id}</p>
                <DropDownMenu/>
            </div>
            <img className ='card-athlete-image' src={photo} alt=""/>
            <p className='card-athlete-name'>{name}</p>
            <p className='card-athlete-date'>{date}</p>
            <p className='card-athlete-position'>{position}</p>
            <p className='card-athlete-club'>{club}</p>
        </div>
    )
}
