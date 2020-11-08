import React, { useState } from 'react'
import clases from './RegisterClient.css'
import Card from '../../components/card/Card.js'

const RegisterClient = (props)=>{
    const [myForm,updateForm] = useState({
        data: {
            document: {
                value: '',
                clicked:false,
                error:false
            },
            name:{
                value:'',
                clicked:false,
                error:false
            },
            lastname:{
                value:'',
                clicked:false,
                error:false
            },
            email:{
                value:'',
                clicked:false,
                error:false
            },
            phone:{
                value:'',
                clicked:false,
                error:false
            }
        }
    })
    const [error,setError]=useState(false);
    const updateValue= (event,identifier)=>{
        const origin= {...myForm};
        updateForm({data:{[identifier]:{value:[event.target.value]}}})
    }
    const updateHandler = (event)=>{
        //event.preventDefault();
        const emailRegex=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/; 
        if (emailRegex.test(event.target.value))
            setError(false);
        else 
            setError(true);
    }
    const clicked = event => {
        updateForm({data:{document:{clicked:true}}});
        console.log(myForm);
    }
    return(
        <Card>
            <form>
                <div className='form-group'>
                    <label>Documento</label>
                    <input type='number' className='form-control' placeholder='Documento' onBlur={(event)=>updateValue(event,'documento')}/>
                </div>
                <div className='form-group'>
                    <label>Nombre</label>
                    <input type='string' className='form-control' placeholder='Nombre' onBlur={(event)=>updateValue(event,'name')}/>
                </div>
                <div className='form-group'>
                    <label>Apellido</label>
                    <input type='string' className='form-control' placeholder='Apellido' onBlur={(event)=>updateValue(event,'lastname')}/>
                </div>
                <div className='form-group'>
                    <label>Correo</label>
                    <input type='email' className={error ? 'form-control error-border': 'form-control'} placeholder='Correo' onBlur={(event)=>updateValue(event,'email')}/>
                </div>
                <div className='form-group'>
                    <label>Telefono</label>
                    <input type='number' className='form-control' placeholder='Telefono' onBlur={(event)=>updateValue(event,'phone')}/>
                </div>
                <button type="submit" className='btn btn-default btn-color' disabled={error}>Registrar</button>
            </form>
        </Card>
    )
}

export default RegisterClient