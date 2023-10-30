import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

// TODO: colocar o botão envolto no Link para que funcione no 
// botão todo e não somente no texto

export default function ButtonFilledCancel({route, text}){
    return(
        <Link className="btn-cancel-component" type="button" to={route}>
            {text}
        </Link> 
    )
  }
  