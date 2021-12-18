import React from 'react';
import Data from './Data'
const Div1=()=>{
    return (<>
        <div className="customer-info">
            <h3>Appointment <span>{Data[0]['Appointment']}</span></h3>
            <h3>Email: <span>{Data[0]['Email']}</span></h3>
            <h3>Phone: <span>{Data[0]['Phone']}</span></h3>
        </div>
    </>)
}
export default Div1;