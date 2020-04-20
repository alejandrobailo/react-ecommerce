import React from 'react';
import { withRouter } from 'react-router-dom'
// withRouter nos da acesso a las propiedades del router sin hacer un props tunellin de padre a hijo 

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (

    // Metemos una clase dinamica en funcion de si tiene la propiedad size o no
    // Navegamos con rutas dinamicas en funcion del linkUrl
    < div className={`${size} menu-item`} onClick={() => {
        return history.push(`${match.url}${linkUrl}`)
    }}>

        {/* Le pasamos el bg dinamico en un objeto style con propiedades */}
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);    