import React from 'react'

const RechargeWallet = (props)=>{
    return(
        <div className=''>
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
        </div>
    )
}

export default RechargeWallet