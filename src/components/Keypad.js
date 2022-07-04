// Code Keypad Component Here
import React from 'react';

function Keypad(){

    function handleChange (event){
        console.log(event.target.value)
    }
    
    return (
    <div>
        <input 
        type="text" 
        onChange={handleChange}
        placeholder="Enter password..."/>
    </div>)
}


export default Keypad