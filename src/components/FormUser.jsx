import React from 'react'
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'


export const FormUser = ({ setDatosUsuario }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (datos) => {
        setDatosUsuario({
            ...datos,
            existeData: true
        })
    };


    return (
        <div className="box-login"> 
            
            <div className="titulo-box-login">
                <h2>Nombre y Apellido</h2>
            </div>

            <div className="form-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input autoComplete="false" required placeholder="Nombre" name="nombre" id="nombre" {...register("nombre")} />
                    <input autoComplete="false" required placeholder="Apellido" name="apellido" id="apellido" {...register("apellido")} />
                    <input name="submit" id="submit" type="submit" />
                </form>
            </div>

        </div>
    )
}

FormUser.propTypes = {
    setDatosUsuario: PropTypes.func.isRequired,
}
