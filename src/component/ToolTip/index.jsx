import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
const ToolTip = ({label,children}) => {
    return (
        <div className='d-flex m-1' style={{position: 'relative'}}>

        <OverlayTrigger overlay={<Tooltip id={'tooltip-disabled-'+ Math.random()}>{label}</Tooltip>}>
          <span className="d-inline-block">
           
             {children}
         
          </span>
        </OverlayTrigger>
        
        </div>
      );
}

export default ToolTip