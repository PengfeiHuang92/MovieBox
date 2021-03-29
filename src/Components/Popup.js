import React from 'react'

const Popup = (props) => {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTriggerBtn(false)}>X</button>
                <iframe title="trailerPlay" className="player" type="text/html"
                    src={props.movieURL}
                    frameborder="1" allowFullScreen
                    ></iframe>
            </div>
        </div>
    ) : "";
}

export default Popup
