import React,{ useState } from 'react'
import Card from '../../components/card/Card'
import {validateValue} from '../../commons/Utils'
import axios from '../../axios';
import Spinner from '../../components/spinner/Spinner';
import errorHandler from '../../highorder/errorHandler';

const AuthPayment = (props)=>{
    const [myForm,updateForm] = useState({
        data: {
            document: {
                value: '',
                clicked:false,
                error:true
            },
            token:{
                value:'',
                clicked:false,
                error:true
            },
        },
        error:false,
        ok:false,
        loading:false
    });

    const initState=(ok)=>{
       updateForm({
        data: {
            document: {
                value: '',
                clicked:false,
                error:true
            },
            token:{
                value:'',
                clicked:false,
                error:true
            },
        },
        error:false,
        ok:ok,
        loading:false
    });
    };

    let actualizarEstado = (data) => {
        updateForm(Object.assign({}, myForm, data));
    };

    const auth =async (event)=>{
        event.preventDefault();
        try{
            actualizarEstado({
                loading: true
            })
            const response= await axios.post('/payment/auth',
                {
                    "document":myForm.data.document.value.toString(),
                    "token":myForm.data.token.value
                }
            )
            if(!response.data)
                throw new Error("Error http");
            actualizarEstado({
                ok:true,
                loading:false
            })
            initState(true)
        }
        catch (err){
            initState(false);
        }
    }

    const updateValue= (event,identifier,type)=>{
        event.preventDefault();
        const parent = {...myForm};
        const origin= {...parent['data']};
        const element = {...origin[identifier]}
        element.value = event.target.value;
        element.error = validateValue(event.target.value,type);
        element.clicked = true;
        origin[identifier]= element;
        parent['data']=origin;
        parent.error=activateButton(origin);
        updateForm (parent);
    };
    const getError = (identifier)=>{
        const origin= {...myForm.data};
        const element = {...origin[identifier]};
        return element.error && element.clicked;
    };

    const activateButton=(data)=>{
        const origin= data;
        let error = true;
        for (let element in origin){
            if (origin[element].error===true){
                error =false;
            }
                
        }
        return error;
    };
    return(
        myForm.loading  ? <Spinner/> :
        <Card title='Autenticar Pago!'>
            <form onSubmit={auth}>
                <div className='form-group'>
                    <label>Documento</label>
                    <input type='number' className={getError('document')  ? 'form-control error-border': 'form-control'} placeholder='Documento' onChange={(event)=>updateValue(event,'document','number')}/>
                </div>
                <div className='form-group'>
                    <label>Token</label>
                    <input type='string' className={getError('token')  ? 'form-control error-border': 'form-control'} placeholder='Token' onChange={(event)=>updateValue(event,'token','string')}/>
                </div>
                <button type="submit" className='btn btn-default btn-color' disabled={!myForm.error}>Validar</button>
                {myForm.ok ? <span className='text-success'>Pago autenticado!!</span>:null}
            </form>
        </Card>
    )
}

export default errorHandler(AuthPayment,axios)