import React ,{ useState }from 'react'
import Card from '../../components/card/Card'
import {validateValue} from '../../commons/Utils'
import axios from '../../axios';
import Spinner from '../../components/spinner/Spinner';
import errorHandler from '../../highorder/errorHandler';
import {Link} from 'react-router-dom'

const MakePayment = (props)=>{
    const [myForm,updateForm] = useState({
        data: {
            document: {
                value: '',
                clicked:false,
                error:true
            },
            amount:{
                value:'',
                clicked:false,
                error:true
            },
        },
        error:false,
        ok:false,
        loading:false
    });

    let actualizarEstado = (data) => {
        updateForm(Object.assign({}, myForm, data));
    };

    const pay =async (event)=>{
        event.preventDefault();
        try{
            actualizarEstado({
                loading: true
            })
            const response= await axios.post('/payment',
                {
                    "document":myForm.data.document.value.toString(),
                    "amount": parseFloat(myForm.data.amount.value)
                }
            )
            if(!response.data)
                throw new Error("Error http");
            actualizarEstado({
                ok:true,
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
        <Card title='Enviar Pago!'>
            <form onSubmit={pay}>
                <div className='form-group'>
                    <label>Documento</label>
                    <input type='number' className={getError('document')  ? 'form-control error-border': 'form-control'} placeholder='Documento' onChange={(event)=>updateValue(event,'document','number')}/>
                </div>
                <div className='form-group'>
                    <label>Monto</label>
                    <input type='number' className={getError('amount')  ? 'form-control error-border': 'form-control'} placeholder='Monto' onChange={(event)=>updateValue(event,'amount','decimal')}/>
                </div>
                <button type="submit" className='btn btn-default btn-color' disabled={!myForm.error}>Pagar</button>
                {myForm.ok ? <span className='text-success'>Pago Enviado!!</span>:null}
            </form>
            <Link to="/pay/auth" className='float-right'>
                    <span className="font-weight-bold">Click aqui para autenticar tu pago!</span>
            </Link>
        </Card>
    )
}

export default errorHandler(MakePayment,axios)