const validateEmail = (email)=>{
    const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return (emailRegex.test(email));
}

const validateNumber = (number)=>{
    const numberRegex= /^[0-9]+$/;
    return (numberRegex.test(number));
}

const validateDecimal = (number)=>{
    const numberRegex= /^[1-9]\d*(\.\d+)?$/;
    return (numberRegex.test(number));
}

export const validateValue=(value,type)=>{
    switch (type){
        case 'string':
            return ((value==null)||(value.trim()==''));
        case 'number':
            return ((value==null)||(value.trim()=='')||!(validateNumber(value)));
        case 'decimal':
            return ((value==null)||(value.trim()=='')||!(validateDecimal(value)));
        case 'email':
            return ((value==null)||(value.trim()=='')||!(validateEmail(value)));
    }
}

export default {validateValue}
