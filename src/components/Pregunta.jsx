import React, { useState } from 'react';

import { PREGUNTAS } from '../assets/data/data'
import { ResultadoTest } from './ResultadoTest';

export const Pregunta = ( { barraPreguntas, setBarraPreguntas }) => {

    const [contadorPreguntas, setContadorPregunta] = useState( 0 );

    const [testTerminado, setTestTerminado] = useState( false );

    const [error, setError] = useState({ isError: false, text: '' });

    const [valorCampo, setValorCampo] = useState('');

    const { isError, text } = error;

    const letrasRespuesta = ['A', 'B', 'C', 'D'];

    const handleChangeInput = (event) => {
        const letra = event.target.value.toUpperCase();
        if( !letrasRespuesta.includes(letra) && letra !== ''){
            setError({ 
                isError: true,
                text: letra + ' No es valida!!'
            })
            event.target.value = '';
        } else {
            setError({ 
                ...error,
                isError: false,
            })
            setValorCampo( letra );
        }
    }

    const preguntaActual = PREGUNTAS[contadorPreguntas]; 
    
    const handleCambioPregunta = () => {

        let solucionPregunta = false;

        if( preguntaActual.respuestaCorrecta.toLowerCase() === valorCampo.toLowerCase()){
            solucionPregunta = true;
        }
        
        setBarraPreguntas([
            ...barraPreguntas,
            {
                numPregunta: contadorPreguntas + 1,
                solucion: solucionPregunta
            }
        ])
        
        if( PREGUNTAS.length === contadorPreguntas + 1 ){
            setTestTerminado( true );
            return;
        }
        setContadorPregunta( contadorPreguntas + 1 );
        setValorCampo('');
    }


    return (
        <>  
            {
                !testTerminado ? 
                <div className="col-md-10 caja-pregunta">
                    <h3 className="titulo-pregunta">{contadorPreguntas + 1}. ¿{ preguntaActual.titulo }?</h3>

                    <div className="caja-respuestas row">
                        {
                            preguntaActual.respuestasPosibles.map( res => (
                                <div key={res.indice} className="col-md-6">
                                    <p> {res.indice}: <span>{res.respuesta}</span> </p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="respuesta-boton row" >
                        <input onChange={ handleChangeInput } value={valorCampo} className="col-md-6 input-respuesta" maxLength="1" autoComplete="false" required name="repuesta" id="repuesta"/>
                        <button onClick={ handleCambioPregunta } disabled={ isError || (valorCampo === '')} className="btn btn-primary col-md-6"> Siguiente </button>
                        { isError && <span className="col-md-12 text-light"> { text } </span> }
                    </div>

                </div> :
                <ResultadoTest barraPreguntas={barraPreguntas} />
            }

            

        </>
    );
}
