import React from 'react'
import Card from '../../components/card/Card'

const AuthPayment = (props)=>{
    return(
        <Card>
            <form>
                <div className='form-group'>
                    <label>Documento</label>
                    <input type='number' className='form-control' placeholder='Documento'/>
                </div>
                <div className='form-group'>
                    <label>Token</label>
                    <input type='number' className='form-control' placeholder='Token'/>
                </div>
                <button type="submit" className='btn btn-default btn-color'>Validar</button>
            </form>
        </Card>
    )
}

export default AuthPayment