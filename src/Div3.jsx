import React from 'react';
import Data from './Data'
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Div3=()=>{
    return (
        <>
            <div className="product-list">
                <FontAwesomeIcon icon={faCalendarCheck} color='orange' size="2x" />
                
                <div className="imageData">
                    <img src={Data[0]['profileImg']} width="150em" height="150em" alt="Profile" />
                    <div >
                        <h2>{Data[0]['Data1']}</h2>
                        <h3 style={{ fontWeight: "normal", color: "rgb(128, 124, 124)"}}>{Data[0]['Data2']}</h3>
                    </div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} size="2x" />
                
            </div>
        </>
    )
}
export default Div3;