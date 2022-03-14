function Employee(props) {
  return (
    <div className="card">
      <div className="card-header bg-dark text-white form-control mt-2 ">
        <h3>Data Karyawan</h3>
        <button className="btn btn-info text-dark btn-block">
          Tambah data
        </button>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-3">
            <img
              className="card-img-top img-rounded"
              src={props.gambar}
              alt="Not found" style={{width:`18rem`}}
            ></img>
          </div>
          <div className="col-4">
            <small className="text-info">Nama</small>
            <h4 className="text-dark">{props.nama}</h4>
            <small className="text-info">Tgl terbit</small>
            <h4 className="text-dark">{props.tglTerbit}</h4>
            <small className="text-info">Harga</small>
            <h4 className="text-dark">{props.harga}</h4>
          </div>
          <div className="col-4">
            <small className="text-info">Penerbit</small>
            <h4 className="text-dark">{props.penerbit}</h4>
            <small className="text-info">Kota Terbit</small>
            <h4 className="text-dark">{props.kota}</h4>
            <small className="text-info">Genre</small>
            <h4 className="text-dark">{props.genre}</h4>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary ">Edit</button>
        <button className="btn btn-danger">Hapus</button>
      </div>
    </div>
  );
}

export default Employee;
