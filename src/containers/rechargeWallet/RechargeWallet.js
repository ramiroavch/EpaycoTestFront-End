import React from 'react'
import Card from '../../components/card/Card'

const RechargeWallet = (props)=>{
    return(
        <Card>
            <form>
                <div className='form-group'>
                    <label>Documento</label>
                    <input type='number' className='form-control' placeholder='Documento'/>
                </div>
                <div className='form-group'>
                    <label>Telefono</label>
                    <input type='number' className='form-control' placeholder='Telefono'/>
                </div>
                <div className='form-group'>
                    <label>Monto</label>
                    <input type='number' className='form-control' placeholder='Monto'/>
                </div>
                <button type="submit" className='btn btn-default btn-color'>Recargar</button>
            </form>
        </Card>
    )
}

export default RechargeWallet