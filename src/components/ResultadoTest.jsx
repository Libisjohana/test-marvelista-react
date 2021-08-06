import React from 'react'

export const ResultadoTest = ( {barraPreguntas} ) => {

    const acertadas = barraPreguntas.filter( (p) => p.solucion ).length; 
    const erradas = barraPreguntas.filter( (p) => !p.solucion ).length; 

    return (
        <div className="caja-resultado">
            <h2 className="h4 titulo-resultado text-light">Resultado del Test</h2>
            <h3 className="h4 preguntas-acertadas text-success">
                Preguntas acertadas: { acertadas }
            </h3>
            <h3 className="h4 preguntas-erradas text-danger">
                Preguntas erradas: { erradas }
            </h3>
            <h3 className="h4 promedio text-light">
                Promedio: { ( barraPreguntas.length * acertadas ) / 1 }%
            </h3>

            <button className="btn btn-primary " onClick={ () => { window.location.reload() }  }> Nuevo Intento </button>
        </div>
    )
}
