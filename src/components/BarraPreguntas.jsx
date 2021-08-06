/* eslint-disable no-sequences */
import React from 'react'

export const BarraPreguntas = ( { barraPreguntas } ) => {
    let solucionClase;
    return (
        <div className="caja-soluciones">
            { 
                barraPreguntas.map( p => (
                    solucionClase = (p.solucion ? 'correcta' : 'incorrecta'),
                    <div className="caja-pregunta" key={p.numPregunta}>
                        <span 
                            className={ "circulo-numero " + (solucionClase) }
                        >
                            {p.numPregunta}
                        </span>
                        <p className={ "text-solucion " + (solucionClase) }>
                            { p.solucion ? 'Correcta' : 'Incorrecta' }
                        </p>
                    </div>
                ) )
            }
        </div>
    )
}
