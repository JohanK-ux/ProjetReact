import React from 'react'
import {apifilm} from './Apifilm'


function FilmList (){
    return (

        <ul>           
        {apifilm.map((apifilm) => (
            <li key={apifilm.id}>
        {apifilm.fullTitle}-
        {apifilm.runtimeMins} minuts - 
        <img src={apifilm.image}  className='Image'  />
        
        </li>
    ))}
  
    </ul>
        
        )
}
export default FilmList