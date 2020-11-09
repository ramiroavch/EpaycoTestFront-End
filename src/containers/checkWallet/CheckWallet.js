import React ,{ useState } from 'react'
import Card from '../../components/card/Card'
import {validateValue} from '../../commons/Utils'
import axios from '../../axios';
import Spinner from '../../components/spinner/Spinner';
import errorHandler from '../../highorder/errorHandler';
const CheckWallet = (props)=>{
    const [myForm,updateForm] = useState({
        data: {
            document: {
                value: '',
                clicked:false,
                error:true
            },
            phone:{
                value:'',
                clicked:false,
                error:true
            },
        },
        error:false,
        balance:null,
        loading:false
    });

    let actualizarEstado = (data) => {
        updateForm(Object.assign({}, myForm, data));
    };

    const getBalance =async (event)=>{
        event.preventDefault();
        try{
            actualizarEstado({
                loading: true
            })
            const response= await axios.post('/client/wallet',
                {
                    "document":myForm.data.document.value,
                    "phone":myForm.data.phone.value
                }
            )
            actualizarEstado({
                balance: response.data.balance,
                loading:false
            })
        }
        catch (err){
            actualizarEstado({
                loading:false
            })
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
        <Card title='Consultar Saldo'>
                <form>
                    <div className='form-group'>
                        <label>Documento</label>
                        <input type='number' className={getError('document')  ? 'form-control error-border': 'form-control'} placeholder='Documento' onChange={(event)=>updateValue(event,'document','number')}/>
                    </div>
                    <div className='form-group'>
                        <label>Telefono</label>
                        <input type='number' className={getError('phone')  ? 'form-control error-border': 'form-control'} placeholder='Telefono' onChange={(event)=>updateValue(event,'phone','number')}/>
                    </div>
                    <button type="submit" className='btn btn-default btn-color' disabled={!myForm.error} onClick={(event) => getBalance(event)} >Solicitar</button>
                    {myForm.balance ? <span className='text-success'>Su saldo es {myForm.balance}</span>:null}
                </form>
        </Card>
    )
}
export default errorHandler(CheckWallet,axios);