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
                {
                    props.movieURL ? <iframe title="trailerPlay" className="player" type="text/html"
                    src={props.movieURL}
                    frameBorder="1" allowFullScreen
                    ></iframe> : <div className="player" > <h3>Sorry, there is no trail for this movie...</h3></div>
                }
            </div>
        </div>
    ) : "";
}

export default Popup
