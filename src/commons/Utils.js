const validateEmail = (email)=>{
    const emailRegex=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/; 
    return (emailRegex.test(email));
}

const validateNumber = (number)=>{
    const numberRegex= /^[0-9]+$/;
    return (numberRegex.test(number));
}

const validateDecimal = (number)=>{
    console.log("entreeee");
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
