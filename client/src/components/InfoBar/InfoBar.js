import React from 'react'

import './InfoBar.css'

export const InfoBar = () => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src={onlineIcon} alt="online image" className="onlineIcon"/>
                <h3>Room Name</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close image"/></a>
            </div>
        </div>
    )
}
