import React from 'react'

import onlineIcon from '../../icons/onlineIcon.png'
import './TextContainer.css'

const TextContainer = ({ users }) => {
  return ( <div className="textContainer">
    {
       users ? 
       (    
           <>
           <h1>Users Online</h1>
           <div className="activeContainer">
               <h2>
                   {users.map(({name}) => {
                       return(
                       <div className="activeItem">
                           {name}
                           <img src={onlineIcon} alt="online"/>
                       </div>
                       )
                   })}
               </h2>
           </div>
           </>
       ) : null
   }
   </div>
  )
}

export default TextContainer