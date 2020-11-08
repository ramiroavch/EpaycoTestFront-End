import React from 'react'

const Card=(props)=>(
    <div className='col-lg-6 col-md-6 col-sm-8 col-12 register-form mt-5 ml-auto mr-auto'>
        <div className='card'>
            <div className='card-body'>
                {props.children}
            </div>
        </div>
    </div>
)

export default Card