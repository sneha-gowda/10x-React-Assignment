import React from 'react';
import Data from './Data'
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Div2=()=>{
    return (
        <>
            <div className="order-info">
                <div>
                    <h2>Status</h2>
                    <p> <FontAwesomeIcon icon={faCircle}/> {Data[0]['Status']}</p>
                </div>
                <div>
                    <h2>Door</h2>
                    <p>{Data[0]['Door']}</p>
                </div>
                <div>
                    <h2>Time</h2>
                    <p>{Data[0]['Time']}  <span >{Data[0]['Date']}</span></p>
                </div>
            </div>
        </>
    )
}
export default Div2;