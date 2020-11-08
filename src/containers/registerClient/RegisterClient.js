import React from 'react'
import clases from './RegisterClient.css'

const RegisterClient = (props)=>{
    return(
        <div className=''>
            <form>
                <div className='form-group'>
                    <label>Documento</label>
                    <input type='number' className='form-control' placeholder='Documento'/>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className='form-control' placeholder='Password'/>
                </div>
                <button type="submit" className='btn btn-default btn-color'>Registrar</button>
            </form>
        </div>
    )
}

export default RegisterClient