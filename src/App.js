// import logo from './logo.svg';
// import Employee from './components/Employee';
// import Accordion from './components/Accordion';
import Balok from './pages/Balok';
import Student from './pages/Student';
// import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      {/* <h3 align="center">This is my custom components</h3> */}
      {/*
        name of element : h3
        attributes/properties : align
     */}      
     {/* <Test name="Rani" fontColor="grey"
     avatar="https://smktelkom-mlg.sch.id/assets/frontend/images/image1001.png"
     >Rani adalah murid
      <button></button>
     </Test>
     <Test name="Cahyo" fontColor="blue"
     avatar="https://smktelkom-mlg.sch.id/assets/frontend/images/lanang_loro.png"
     >Cahyo adalah guru</Test> */}
     {/* <div className='accordion' id='accordion1'>
     <Accordion id="item1"  header="Percobaan 1" parent="#accordion1" firstLine="Hello, this is my first ">
     <Employee nama="Bumi" gambar="https://smktelkom-mlg.sch.id/assets/frontend/images/image1001.png"
     tglTerbit="2022-02-01" harga="Rp80.000" penerbit="Gramedia"
     kota="Jakarta" genre="Novel" />
     </Accordion>

     <Accordion id="item2" header="Percobaan 2" parent="#accordion1" firstLine="Hello, this is my Second ">
     <Employee nama="kereta" gambar="https://smktelkom-mlg.sch.id/assets/frontend/images/image1001.png"
     tglTerbit="2022-02-01" harga="Rp80.000" penerbit="Gramedia"
     kota="Jakarta" genre="Novel" />
     </Accordion>
     </div> */}

     {/* Menampilkan komponen Balok */}
     <Student />
     <Balok  title="Lemari"/>
     <Balok  title="Kotak Pensil"/>

    </div>
  );
}

export default App;
