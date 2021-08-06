import React from 'react'
import user_icon from '../../assets/images/user.svg'; 

export const Header = ({nombre = '', apellido = ''}) => {
    return (
        <header>
            <h2 className="title-header">Test Marvelista</h2>

            {
                nombre !== '' &&
                    <div className="box-user animate__animated animate__fadeIn">
                        <img src={user_icon} alt="Usuario activo"/>
                        <span>{nombre} {apellido}</span>
                    </div>
            }

        </header>
    )
}
