import React from 'react'

const MakePayment = (props)=>{
    return(
        <div className=''>
            <form>
                <div className='form-group'>
                    <label>Documento</label>
                    <input type='number' className='form-control' placeholder='Documento'/>
                </div>
                <div className='form-group'>
                    <label>Monto</label>
                    <input type='number' className='form-control' placeholder='Monto'/>
                </div>
                <button type="submit" className='btn btn-default btn-color'>Pagar</button>
            </form>
        </div>
    )
}

export default MakePayment