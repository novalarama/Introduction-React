import { useState, useEffect } from "react";
import { Modal } from "bootstrap";
import { FaTrash, FaPen } from "react-icons/fa"

export default function Book(props) {
  let [book, setBook] = useState([]);
  let [modalBook, setModalBook] = useState(null);
  let [id, setId] = useState(0);
  let [name, setName] = useState("");
  let [author, setAuthor] = useState("");
  let [publisher, setPublisher] = useState("");
  let [genre, setGenre] = useState("");
  let [image, setImage] = useState("");
  let [action, setAction] = useState("");
  let [readId, setReadId] = useState(true);

  useEffect(() => {
    // sebuah fungsi yang digunakan ketika komponen ditampilkan, return dulu baru useEffet
    // inisisasi data array student (pemberian nilai awal)
    let arrayBook = [
      {
        id: 1,
        name: `Bumi`,
        author: `Tere Liye`,
        publisher: `Gramedia`,
        genre: `Misteri`,
        image: `https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/27/ff858419-758c-4571-b440-20b6a6032e8d.jpg`,
      },
      {
        id: 2,
        name: `Ananta`,
        author: `Risa Sarasvati`,
        publisher: `Gramedia`,
        genre: `Romance`,
        image: `https://www.bukukita.com/babacms/displaybuku/105717_f.jpg`,
      },
    ];
    setBook(arrayBook);

    // inisiasi state modalStudent
    setModalBook(new Modal(document.getElementById(`modal_book`)));
  }, []);

  // function save book
  let saveBook = () => {
    // close modal
    modalBook.hide();
    if (action === `insert`) {
      let newData = {
        id: id,
        name: name,
        author: author,
        publisher: publisher,
        genre: genre,
        image: image,
      };

      // store array from book
      let temp = [...book];
      temp.push(newData);
      setBook(temp);
    } else if (action === `edit`) {
      //store data book
      let temp = [...book];
      //findindex of selected data by Id
      let index = temp.findIndex((item) => item.id === id);

      //update data based on founded index
      temp[index].name = name;
      temp[index].author = author;
      temp[index].publisher = publisher;
      temp[index].genre = genre;
      temp[index].image = image;

      //restore to books from temp
      setBook(temp);
    }
  };

  //function add book
  let addBook = () => {
    // open modal
    modalBook.show();
    // reset isi dari setiap inputan
    setId(0);
    setName("");
    setAuthor("");
    setPublisher("");
    setGenre("");
    setImage("");
    setAction("insert");
    setReadId(true);
  };

  //function editbook
  let editBook = (item) => {
    modalBook.show();

    setId(item.id);
    setName(item.name);
    setAuthor(item.author);
    setPublisher(item.publisher);
    setGenre(item.genre);
    setImage(item.image);
    setAction("edit");
    setReadId(false);
  };

  //function deleteBook
  let deleteBook = (item) => {
    // setId(item.id)
    // setAction("delete")
    if (window.confirm(`Yakin Menghapus ?`)) {
      let temp = [...book];

      let index = temp.findIndex((item) => item.id === id);

      temp.splice(index, 1);

      setBook(temp);
    }
  };
  return (
    <div>
      {/* isi return adalah komponen tampilan */}
      <div
        className="card col-10 form-control"
        style={{ fontFamily: `poppins` }}
      >
        <div className="card-header bg-danger rounded-3 mt-2">
          <div className="row">
            <div className="col-11 mt-2">
              <h3 className="text-white">
                <b>Noval's Library</b>
              </h3>
            </div>
            <div className="col-1 mt-2">
              <button
                className="btn btn-dark text-white"
                onClick={() => addBook()}
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-horizontal-xl">
            {book.map(
              (
                item //map adalah fungsi dari array untuk scan setiap isi array
              ) => (
                <li className="list-group-item flex-fill">
                  <div className="row" key={`key${item.id}`}>
                    <div className="col-3">
                      {/* <!-- untuk gambar --> */}
                      <img src={item.image} width="80%" />
                    </div>
                    <div className="col-2">
                      <small>ID</small>
                      <h5>{item.id}</h5>
                    </div>
                    <div className="col-2">
                      <small>Name</small>
                      <h5>{item.name}</h5>

                      <small>Author</small>
                      <h5>{item.author}</h5>
                    </div>
                    <div className="col-2">
                      <small>Publisher</small>
                      <h5>{item.publisher}</h5>

                      <small>Genre</small>
                      <h5>{item.genre}</h5>
                    </div>

                    <div className="col-2">
                      <small>Action</small> <br />
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => editBook(item)}
                      >
                        <FaTrash icon="fa-solid fa-trash" />
                      </button>
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => deleteBook(item)}
                      >
                        <FaPen icon="fa-solid fa-pen" />
                      </button>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="card-footer">
          {/* button add data */}

          {/* Modal component */}
          <div className="modal " id="modal_book">
            <div className="modal-dialog">
              <div className="modal-content bg-danger text-white">
                <div className="modal-header">
                  <h5 className="modal-title">Form Book</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  ID
                  <input
                    type={`number`}
                    className="form-control mb-2"
                    value={id}
                    onChange={(ev) => setId(ev.target.value)}
                    readOnly={!readId}
                  />
                  Name
                  <input
                    type={`text`}
                    className="form-control mb-2"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                  />
                  Author
                  <input
                    type={`text`}
                    className="form-control mb-2"
                    value={author}
                    onChange={(ev) => setAuthor(ev.target.value)}
                  />
                  Publisher
                  <input
                    type={`text`}
                    className="form-control mb-2"
                    value={publisher}
                    onChange={(ev) => setPublisher(ev.target.value)}
                  />
                  Genre
                  <input
                    type={`text`}
                    className="form-control mb-2"
                    value={genre}
                    onChange={(ev) => setGenre(ev.target.value)}
                  />
                  Image
                  <input
                    type={`text`}
                    className="form-control mb-2"
                    value={image}
                    onChange={(ev) => setImage(ev.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    class="btn btn-outline-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-dark"
                    onClick={() => saveBook()}
                  >
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
