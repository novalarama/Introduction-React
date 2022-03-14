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
          <div className="col">
            <img
              className="card-img-top"
              src={props.gambar}
              alt="Not found" style={{width:`18rem`}}
            ></img>
          </div>
          <div className="col float-left">
            <i className="text-info">Nama</i>
            <h4 className="text-dark">{props.nama}</h4>
            <i className="text-info">Tgl terbit</i>
            <h4 className="text-dark">{props.tglTerbit}</h4>
            <i className="text-info">Harga</i>
            <h4 className="text-dark">{props.harga}</h4>
          </div>
          <div className="col">
            <i className="text-info">Penerbit</i>
            <h4 className="text-dark">{props.penerbit}</h4>
            <i className="text-info">Kota Terbit</i>
            <h4 className="text-dark">{props.kota}</h4>
            <i className="text-info">Genre</i>
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
