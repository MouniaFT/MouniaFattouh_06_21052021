const PhotographeInfos = (infos) => {

    return (
      <div className="card-photographe">
        <img src={`../images/Photographers/${infos.photographe.portrait}`} alt=""/>
        <div className="card-photographe-body">
          <h1 className="name">{infos.photographe.name}</h1>
          <p className="location">{infos.photographe.city}, {infos.photographe.country}</p>
          <p className="tagline">{infos.photographe.tagline}</p>
          <ul className="list-tags"> 
              {
                  infos.photographe.tags
                  .map((tags) => (
                      <li className="tag-item"><button className="tag-btn" value={tags}>#{tags}</button></li>
                  ))

              }
          </ul>
        </div>
        <button className="contact-btn">Contactez-moi</button>
      </div>
    );
}
export default PhotographeInfos;