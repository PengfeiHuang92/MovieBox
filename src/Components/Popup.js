import React from 'react'

const Popup = (props) => {

    console.log('URL', props.movieURL)
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTriggerBtn(false)}>X</button>
                <iframe className="player" type="text/html"
                    src={props.movieURL}
                    frameborder="0"></iframe>
            </div>
        </div>
    ) : "";
}

export default Popup
