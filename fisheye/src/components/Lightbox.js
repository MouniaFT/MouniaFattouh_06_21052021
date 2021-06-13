const LightBox = (props) => {
    

    return(
        <>
            <div className="slider">
                {props.photographers
                    .filter((photographe) => photographe.id === parseInt(props.id) )
                    .map(photographe => {
                        return props.media.image ?
                        <img className="slider-image" src={`../images/${photographe.name.replace(/\s+/g, '')}/${props.media.image}`} aria-label="image closeup view" alt=""/>
                        :
                        <video className="slider-video" controls><source src={`../images/${photographe.name.replace(/\s+/g, '')}/${props.media.video}`} type="video/mp4"></source></video>
                        }
                    )
                } 
                <p className="slider-title">{props.media.title}</p>
            </div>
            <button onClick={() => props.setMediaDisplayed(undefined)} className="btn-close" title="Close dialog">
                  <img src="../images/close-lightbox.svg" alt=""/>
            </button>
            <button className="slider-chevron chevron-left" onClick={props.prevSlide} title="Previous image">
                <img src="../images/chevron-left.svg" alt=""/>
            </button>
            <button className="slider-chevron chevron-right" onClick={props.nextSlide} title="Next image">
                <img src="../images/chevron-right.svg" alt=""/>
            </button>
        </>
    )
}

export default LightBox;