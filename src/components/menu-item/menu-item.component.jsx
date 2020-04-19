import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    // Le pasamos el bg dinamico en un objeto style con propiedades
    // Metemos una clase dinamica en funcion de si tiene la propiedad size o no
    < div className={`${size} menu-item`}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;