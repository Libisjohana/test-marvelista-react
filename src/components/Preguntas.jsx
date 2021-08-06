import React, { useState } from 'react'
import { BarraPreguntas } from './BarraPreguntas'
import { Pregunta } from './Pregunta'

export const Preguntas = ( {nombre = '', apellido = ''} ) => {

    const [barraPreguntas, setBarraPreguntas] = useState([])

    return (
        <div className="div-preguntas row">
            
            <div className="col-md-4">
                <BarraPreguntas barraPreguntas={barraPreguntas} />
            </div>

            <div className="col-md-8">
                <div className="caja-preguntas">
                    <div className="caja-header">
                        <h2 className="titulo-preguntas">Preguntas</h2>
                        <h2 className="nombre-usuario">Usuario: { nombre } { apellido }</h2>
                    </div>
                    <Pregunta barraPreguntas={ barraPreguntas } setBarraPreguntas={ setBarraPreguntas } />
                </div>
            </div>

        </div>
    )
}
