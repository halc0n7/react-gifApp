import React, { useState } from 'react'
import {AppCategory} from './Component/AppCategory';
import { GifGrid } from './Component/GifGrid';



export const GifExpertApp = () => {

   
   // vamos a usar el hook del useState para añadir un elemento en mis categorias ya no usamos el const categories =[]
    const [categories, setCategories] = useState(['One Punch'])
    
    
    
   
   
   
   
   //1 const handleApp = ()=>{
       //1 setCategories([...categories,'HunterXHunter']); //uso el operador expret... para añadir una nueva caterogia a mi arreglo
   //1       setCategories(cats=>[...categories,'HunterXHunter']); //uso un callback en el cual el primer argumento cats es el valor del estado anterior y luego tiene q regresar el nuevo estado , en este caso un nuevo arreglo con los valores anteriores mas el nuevo elemento HunterXHunter  
   //1 }


    




    return (
        <>
            <h2>GifExpertApp</h2>
            <AppCategory setCategories={setCategories} />
            <hr />
            
            <ol>
                {
                     categories.map(category=>(
                     <GifGrid 
                     key={category}
                     category={category} />
                     ) )
                }
            </ol>
        </>
    )
}

