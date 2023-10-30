import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function ButtonFilled({route, text, btn = "btn"}){
    return(
        <Link className="btn-compnent" to={route} type="button">
            {/* <button className = {btn}> */}
                {text}
            {/* </button> */}
        </Link>
    )
  }
  