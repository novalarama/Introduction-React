import { useState, useEffect } from "react";
import { Modal } from "bootstrap";
import BookList from "../components/BookList";

export default function Books(props){
    let [books, setBooks] = useState([]);
//   let [modalBook, setModalBook] = useState(null);
//   let [isbn, setIsbn] = useState(0);
//   let [name, setName] = useState("");
//   let [author, setAuthor] = useState("");
//   let [publisher, setPublisher] = useState("");
//   let [price, setPrice] = useState(0);
//   let [rating, setRating] = useState("");
//   let [image, setImage] = useState("");
//   let [action, setAction] = useState("");
//   let [readIsbn, setReadIsbn] = useState(true);

  useEffect(() => {
    // sebuah fungsi yang digunakan ketika komponen ditampilkan, return dulu baru useEffet
    // inisisasi data array Book (pemberian nilai awal)
    let arrayBook = [
      {
        isbn: 1,
        name: `Bumi`,
        author: `Tere Liye`,
        publisher: `Gramedia`,
        price: 78000,
        rating: 4,
        progress : 25,
        image: `https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/27/ff858419-758c-4571-b440-20b6a6032e8d.jpg`,
      },
      {
        isbn: 2,
        name: `Ananta`,
        author: `Risa Sarasvati`,
        publisher: `Gramedia`,
        price: 88000,
        rating: 3,
        progress : 69,
        image: `https://www.bukukita.com/babacms/displaybuku/105717_f.jpg`,
      },
    ];
    setBooks(arrayBook);

    // inisiasi state modalBook
    // setModalBook(new Modal(document.getElementById(`modal_book`)));
  }, []);
    return(
        <div className="container-fluit">
            {books.map(item => (
                <BookList
                key={`key-${item.isbn}`} 
                isbn={item.isbn}
                title={item.name}
                author={item.creator}
                publisher={item.publisher}
                price={item.price}
                rating={item.rating}
                progress={item.progress}
                cover={item.image}
                />
            ))}
        </div>
    )
}
