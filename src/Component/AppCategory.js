import React,{useState} from 'react'
import PropTypes from 'prop-types';
export const AppCategory = ({setCategories}) => {

    const [ImpuValue, setImpuValue] = useState('')

    const handleInputChange = (e)=>{ //para extraer el nuevo valor en la caja de comentario
        
        setImpuValue(e.target.value)
    }
    const handleSubmit = (e)=>{ //para enviar el nuevo texto q escribimos
        e.preventDefault(); //para prevenir el comportamiento del form de refrescar toda la pagina
         if(ImpuValue.trim().length>2){
            setCategories(cats=>[ImpuValue,...cats]);
            setImpuValue('');
         }
        
       
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value = {ImpuValue}
                onChange={handleInputChange}
            />
        </form>  
        
    )
}

AppCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
