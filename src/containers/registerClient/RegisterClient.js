import React, { useEffect, useState } from 'react'
import clases from './RegisterClient.css'
import Card from '../../components/card/Card.js'
import {validateValue} from '../../commons/Utils'

const RegisterClient = (props)=>{
    const [myForm,updateForm] = useState({
        data: {
            document: {
                value: '',
                clicked:false,
                error:true
            },
            name:{
                value:'',
                clicked:false,
                error:true
            },
            lastname:{
                value:'',
                clicked:false,
                error:true
            },
            email:{
                value:'',
                clicked:false,
                error:true
            },
            phone:{
                value:'',
                clicked:false,
                error:true
            }
        },
        error:false
    })

    const updateValue= (event,identifier,type)=>{
        event.preventDefault();
        const parent = {...myForm};
        const origin= {...parent['data']};
        const err={...parent['error']};
        const element = {...origin[identifier]}
        element.value = event.target.value;
        element.error = validateValue(event.target.value,type);
        element.clicked = true;
        origin[identifier]= element;
        parent['data']=origin;
        parent.error=activateButton(origin);
        updateForm (parent);
    }
    const getError = (identifier)=>{
        const origin= {...myForm.data};
        const element = {...origin[identifier]};
        return element.error && element.clicked;
    }

    useEffect(()=>{  
        console.log("hola");
    },[])

    const activateButton=(data)=>{
        const origin= data;
        let error = true;
        for (let element in origin){
            if (origin[element].error===true){
                error =false;
            }
                
        }
        return error;
    }
    return(
        <Card>
            <form>
                <div className='form-group'>
                    <label>Documento</label>
                    <input type='number' className={getError('document')  ? 'form-control error-border': 'form-control'} placeholder='Documento' onChange={(event)=>updateValue(event,'document','string')}/>
                </div>
                <div className='form-group'>
                    <label>Nombre</label>
                    <input type='string' className={getError('name') ? 'form-control error-border': 'form-control'} placeholder='Nombre' onChange={(event)=>updateValue(event,'name','string')}/>
                </div>
                <div className='form-group'>
                    <label>Apellido</label>
                    <input type='string' className={getError('lastname') ? 'form-control error-border': 'form-control'} placeholder='Apellido' onChange={(event)=>updateValue(event,'lastname','string')}/>
                </div>
                <div className='form-group'>
                    <label>Correo</label>
                    <input type='email' className={getError('email') ? 'form-control error-border': 'form-control'} placeholder='Correo' onChange={(event)=>updateValue(event,'email','email')}/>
                </div>
                <div className='form-group'>
                    <label>Telefono</label>
                    <input type='number' className={getError('phone') ? 'form-control error-border': 'form-control'} placeholder='Telefono' onChange={(event)=>updateValue(event,'phone','number')}/>
                </div>
                <button type="submit" className='btn btn-default btn-color' disabled={!myForm.error}>Registrar</button>
            </form>
        </Card>
    )
}

export default RegisterClient