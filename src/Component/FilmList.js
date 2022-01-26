import React from 'react'
import {apifilm} from './Apifilm'



function FilmList (){
    return (

        <div>            
        <ul>           
        {apifilm.map((apifilm) => (
            <li key={apifilm.id}>
        {apifilm.fullTitle}- 
        {apifilm.runtimeMins} minuts - 
        <img src={apifilm.image}  className='Image'  /> 
        <details>
            <summary>Details</summary>
            {apifilm.plot}
        </details>
        </li>
    ))}
  
    </ul> 
        </div>



        
        )
}
export default FilmList