const PhotographeInfos = (infos) => {

    return (
      <div>
          <span>{infos.photographe.name}</span>
          <span>{infos.photographe.city}</span>
      </div>
    );
}
export default PhotographeInfos;