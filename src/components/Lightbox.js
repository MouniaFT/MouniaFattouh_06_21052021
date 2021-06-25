import { createRequire } from "module";


const LightBox = (props) => {
    

    return(
        <>
            <div className="slider">
                {props.photographers
                    .filter((photographe) => photographe.id === parseInt(props.id) )
                    .map(photographe => {
                        return props.media.image ?
                        <img className="slider-image" src={require(`../images/${photographe.name.replace(/\s+/g, '')}/${props.media.image}`).default} alt={props.media.description}/>
                        :
                        <video className="slider-video" controls alt={props.media.description}>
                            <source src={require(`../images/${photographe.name.replace(/\s+/g, '')}/${props.media.video}`).default} type="video/mp4"></source>
                        </video>
                        }
                    )
                } 
                <p className="slider-title">{props.media.title}</p>
            </div>
            <button onClick={() => props.setMediaDisplayed(undefined)} className="btn-close" aria-label="Close dialog">
                <img src={require("../images/close-lightbox.svg").default} alt=""/>
            </button>
            <button className="slider-chevron chevron-left" onClick={props.prevSlide} aria-label="Previous image">
                <img src={require("../images/chevron-left.svg").default} alt=""/>
            </button>
            <button className="slider-chevron chevron-right" onClick={props.nextSlide} aria-label="Next image">
                <img src={require("../images/chevron-right.svg").default} alt=""/>
            </button>
        </>
    )
}

export default LightBox;