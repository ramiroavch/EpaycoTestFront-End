import React ,{ useState }from 'react'
import Card from '../../components/card/Card'
import {validateValue} from '../../commons/Utils'

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
        error:false
    });

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
        <Card>
            <form>
                <div className='form-group'>
                    <label>Documento</label>
                    <input type='number' className={getError('document')  ? 'form-control error-border': 'form-control'} placeholder='Documento' onChange={(event)=>updateValue(event,'document','number')}/>
                </div>
                <div className='form-group'>
                    <label>Monto</label>
                    <input type='number' className={getError('amount')  ? 'form-control error-border': 'form-control'} placeholder='Monto' onChange={(event)=>updateValue(event,'amount','decimal')}/>
                </div>
                <button type="submit" className='btn btn-default btn-color' disabled={!myForm.error}>Pagar</button>
            </form>
        </Card>
    )
}

export default MakePayment