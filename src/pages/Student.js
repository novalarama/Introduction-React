import { useState, useEffect } from "react";

// useState -> digunakan untuk mendefinisikan state
// useEffect => sebuah fungsi yang dijalankan ketika komponennya telah ditampilkan
import { Modal } from "bootstrap";

export default function Student(props) {
  let [student, setStudent] = useState([]);
  let [modalStudent, setModalStudent] = useState(null)
  let [id, setId] = useState(0)
  let [name, setName] = useState("")
  let [date, setDate] = useState("")
  let [action, setAction] = useState("")
  let [readId, setReadId] = useState(true)

  useEffect(() => { // sebuah fungsi yang digunakan ketika komponen ditampilkan, return dulu baru useEffet
    // inisisasi data array student (pemberian nilai awal)
    let arrayStudent = [
      { id: 1, name: `Noval`, date: `13 November 2004` },
      { id: 2, name: `Anirba`, date: `06 Juli 2004` },
    ];
    setStudent(arrayStudent);

    // inisiasi state modalStudent
    setModalStudent(new Modal(document.getElementById(`modal_student`)))
  }, []);

  //function add student
  let addStudent = () => {
    // open modal
    modalStudent.show()
    // reset isi dari setiap inputan
    setId(0)
    setName("")
    setDate("")
    setAction("insert")
    setReadId(true)
  }

    // function save student
    let saveStudent = () => {
        // close modal
        modalStudent.hide()
        if (action === `insert`) {
            let newData = {
                id:id, name:name, date:date
            }

            // store array from student
            let temp = [...student]
            temp.push(newData)
            setStudent(temp)
        } else if(action === `edit`){
          //store data student
          let temp = [...student]
          //findindex of selected data by Id
          let index = temp.findIndex(item => item.id === id)

          //update data based on founded index
          temp[index].name = name
          temp[index].date = date

          //restore to students from temp
          setStudent(temp)
        }
    }

  //function editStudent
  let editStudent = item => {
    modalStudent.show()

    setId(item.id)
    setName(item.name)
    setDate(item.date)
    setAction("edit")
    setReadId(false)
  }
  
  //function deleteStudent
  let deleteStudent = item => {
    // setId(item.id)
    // setAction("delete")
    if(window.confirm(`Yakin Menghapus ?`)){
      let temp = [...student]
    
      let index = temp.findIndex(item => item.id === id)

    temp.splice(index, 1)

    setStudent(temp)
    }
  }

  return (
    <div>
      {/* isi return adalah komponen tampilan */}
      <div className="card col-10 form-control" style={{fontFamily:`poppins`}}>
        <div className="card-header bg-danger">
          <h3 className="text-white"><b>List of XIR4's Student</b></h3>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {student.map((item) => ( //map adalah fungsi dari array untuk scan setiap isi array
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
                    <div className="col-4">
                      <small>Birthdate</small>
                      <h5>{item.date}</h5>
                    </div>
                    
                    <div className="col-2">
                      <small>Action</small> <br />
                      <button className="btn btn-dark mx-2" onClick={() => editStudent(item)}>
                        Edit
                      </button>
                      <button className="btn btn-outline-danger" onClick={() => deleteStudent(item)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="card-footer">
            {/* button add data */}
                <button className="btn btn-dark text-white"
                onClick={() => addStudent()}>
                    Add Student
                </button>

                {/* Create dropdown */}
                <select>
                  {student.map(item => (
                    <option value={item.id}>
                        {item.name}
                    </option>
                  ))}
                </select>

                {/* Create Radio Button */}
                {student.map(item => (
                  <div>
                    <input type={`radio`} name={`name`} value={item.id} />
                    <label>
                      {item.name}
                    </label>
                  </div>
                ))}

            {/* Modal component */}
            <div className="modal " id="modal_student">
                <div className="modal-dialog">
                    <div className="modal-content bg-danger text-white">
                        <div className="modal-header">
                            <h5 className="modal-title">Form Student</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ID
                            <input type={`number`} className="form-control mb-2" 
                            value={id} onChange={ev => setId(ev.target.value)}
                            readOnly={!readId}/>

                            Name
                            <input type={`text`} className="form-control mb-2" 
                            value={name} onChange={ev => setName(ev.target.value)}/>

                            Birthdate
                            <input type={`text`} className="form-control mb-2" 
                            value={date} onChange={ev => setDate(ev.target.value)}/>

                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-dark" 
                            onClick={() => saveStudent()}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* End of Modal */}
        </div>
      </div>
    </div>
  );
}
