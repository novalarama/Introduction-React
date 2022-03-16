import { useState, useEffect } from "react";

// useState -> digunakan untuk mendefinisikan state
// useEffect => sebuah fungsi yang dijalankan ketika komponennya telah ditampilkan

export default function Student(props) {
  let [students, setStudents] = useState([]);

  useEffect(() => {
    // inisisasi data array students (pemberian nilai awal)
    let arrayStudents = [
      { id: 1, name: `Noval`, date: `13 November 2004` },
      { id: 2, name: `Anirba`, date: `06 Juli 2004` },
    ];
    setStudents(arrayStudents);
  }, []);
  return (
    <div>
      {/* isi return adalah komponen tampilan */}
      <div className="card col-10 form-control">
        <div className="card-header bg-info">
          <h3 className="text-white">List of XIR4's Students</h3>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {students.map(
              (
                item //map adalah fungsi dari array untuk scan setiap isi array
              ) => (
                <li className="list-group-item">
                  <div className="row" key={`key${item.id}`}>
                    <div className="col-2">
                      <small>ID</small>
                      <h5>{item.id}</h5>
                    </div>
                    <div className="col-4">
                      <small>Name</small>
                      <h5>{item.name}</h5>
                    </div>
                    <div className="col-6">
                      <small>Birthdate</small>
                      <h5>{item.date}</h5>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
