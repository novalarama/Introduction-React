import {useState, useEffect} from "react";
import GroceryList from "../components/GroceryList";

export default function Grocery(props){
let [grocery, setGrocery] = useState([])

useEffect(() => {
    // sebuah fungsi yang digunakan ketika komponen ditampilkan, return dulu baru useEffet
    // inisisasi data array Grocery (pemberian nilai awal)
    let arrayGrocery = [
      { 
        id: 1,
        tanggal: "01-03-2022",
        stokAwal: 100,
        terjual: 85,
        rusak: 5,
        hargaDasar: 3000,
        hargaJual : 4500
      },
      {
        id: 2,
        tanggal: "04-03-2022",
        stokAwal: 50,
        terjual: 40,
        rusak: 5,
        hargaDasar: 3500,
        hargaJual : 4500
      },
      {
        id: 3,
        tanggal: "10-03-2022",
        stokAwal: 70,
        terjual: 60,
        rusak: 10,
        hargaDasar: 4000,
        hargaJual : 5000
      },
    ];
    setGrocery(arrayGrocery);
  }, []);

  let hitung = (terjual, hargaDasar, hargaJual) =>{
        let untung = hargaJual-hargaDasar;
        let hasil = terjual*untung
        return hasil
  }

  let presentase = (terjual, stokAwal) =>{
        let present = (terjual/stokAwal)*100
        return present
      
  }
    return(
        <div>
          {/* <h1 style={{fontFamily:`poppins`}} className="align-center">List Score of XIR4</h1> */}
          {grocery.map(item => (
                <GroceryList
                key={`key-${item.id}`}
                id={item.id}
                tanggal={item.tanggal} 
                stokAwal={item.stokAwal}
                terjual={item.terjual}
                rusak={item.rusak}
                hargaDasar={item.hargaDasar}
                hargaJual={item.hargaJual}
                keuntungan={hitung(item.terjual, item.hargaDasar, item.hargaJual)}
                present={presentase(item.terjual, item.stokAwal)}
                />
            ))}
        </div>
    )
}