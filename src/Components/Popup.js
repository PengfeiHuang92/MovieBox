import React from 'react'

const Popup = (props) => {
    const closePop = ()=>{
        props.setTriggerBtn(false);
        props.setMovieURL('');
    }
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => closePop()}>X</button>
                <iframe title="trailerPlay" className="player" type="text/html"
                    src={props.movieURL}
                    frameBorder="1" allowFullScreen
                    ></iframe>
            </div>
        </div>
    ) : "";
}

export default Popup
