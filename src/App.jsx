/* eslint-disable react/style-prop-object */
import { useState } from 'react';
import './App.scss';
import { FormUser } from './components/FormUser';
import { Header } from './components/Header/Header';
import { Preguntas } from './components/Preguntas';

function App() {

  const [datosUsuario, setDatosUsuario] = useState({ nombre: '', apellido: '', existeData: false });

  const { nombre, apellido, existeData } = datosUsuario;

  

  return (
    <>
      <Header nombre={nombre} apellido={apellido} /> 

      {
        !existeData && 
          <div className="col-4 box-formulario">
            <FormUser setDatosUsuario={ setDatosUsuario } />
          </div>
      }  

      { 
        existeData && 
          <div className="col-md-10" style={{margin: "0px auto"}}>
            <Preguntas nombre={nombre} apellido={apellido} />
          </div>
      }
    </>
  );
}

export default App;
