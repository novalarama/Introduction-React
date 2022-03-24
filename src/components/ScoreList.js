export default function ScoreList(props) {
  return (
    <div
      className="row m-2 p-2 rounded-lg"
      style={{ border: `2px solid lightgrey` }}
    >
      {/* Cover Area */}
      <div className="col-lg-3">
        <small>Name</small>
        <h4>{props.name}</h4>   
      </div>

      {/* Labels Area */}
      <div className="col-lg-3">
      <small>Math</small>
      <h4>{props.math}</h4> 

      <small>English</small>
      <h4>{props.english}</h4>  

      <small>Chemistry</small>
      <h4>{props.chemistry}</h4>  
      </div>

      <div className="col-lg-3">
      <small>Rata</small>
      <h4>{props.rata}</h4>

      <small>Status</small>
      <h4>{props.status}</h4>  
      </div>

      <div className="col-lg-3">
        
      </div>
    </div>
  );
}
