export default function ScoreList(props) {
  return (
    <div className="container form-control" style={{fontFamily:`poppins`}}>
      
        <div className="card-body">
          <div className="row">
          <div className="col-1">
              <h3 className="mt-auto">{props.id}</h3>
            </div>
            <div className="col-4">
              <small>Name</small>
              <h3>{props.name}</h3>
            </div>
            <div className="col-1">
              <small>Math</small>
              <h5>{props.math}</h5>

              <small>English</small>
              <h5>{props.english}</h5>
            </div>
            <div className="col-2">
              <small>Chemistry</small>
              <h5>{props.chemistry}</h5>
            </div>
            <div className="col-4">
              <small>Rata-rata</small>
              <h5>{props.rata}</h5>

              <small>Status</small>
              <h5>{props.status}</h5>
            </div>
          </div>
        </div>
      
    </div>
  );
}
