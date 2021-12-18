import React from 'react';
import Data from './Data'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ()=>{
    return (
        <>
            <div className="Header">
                <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                <div style={{"textAlign":"center"}}>
                        <h2>{Data[0].Name}</h2>
                        <h3>{Data[0]['Employee ID']}</h3>
                </div>
                <button>Print</button>
            </div>
        </>
    )
}
export default Header;