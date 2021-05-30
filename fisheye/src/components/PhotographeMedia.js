const PhotographeMedia = (props) => {
   
    return (
      <div>
          select
        {props.media
            .filter((media) => media.photographerId === parseInt(props.id))
            .map((media) => (
                <li>{media.title}</li>
            ))
        }
      </div>
    );
}
export default PhotographeMedia;