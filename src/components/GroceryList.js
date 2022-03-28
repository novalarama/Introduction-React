export default function GroceryList(props) {
  return (
    <div className="container form-control" style={{ fontFamily: `poppins` }}>
      <div className="card-body text-dark">
        <div className="row">
          <div className="card bg-light text-dark col-lg-5 mx-2">
            <div className="card-body">
              <small>Tanggal</small>
              <h3>{props.tanggal}</h3>
            </div>
          </div>
          <div className="card bg-primary text-white col-lg-2 mx-2">
            <div className="card-body">
              <small>Stok Awal</small>
              <h3>{props.stokAwal} Kg</h3>
            </div>
          </div>
          <div className="card bg-success text-white col-lg-2 mx-2">
            <div className="card-body">
              <small>Terjual</small>
              <h3>{props.terjual} Kg</h3>
            </div>
          </div>
          <div className="card bg-danger text-white col-lg-2 mx-2">
            <div className="card-body">
              <small>Rusak</small>
              <h3>{props.rusak} Kg</h3>
            </div>
          </div>
          <div className="card bg-secondary text-white col-lg-6 mx-2 my-3">
            <div className="card-body">
              <small>Keuntungan</small>
              <h3>Rp{props.keuntungan}</h3>
            </div>
          </div>
          <div className="card bg-light col-lg-5 mx-1 my-3">
            <div className="card-body">
            <small>Presentase Penjualan</small>
              <div className="progress mt-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${props.present}%` }}
                  aria-valuenow={props.present}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {`${props.present}%`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
