// import logo from './logo.svg';
import Employee from './components/Employee';
import Test from "./components/Test";

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
     <Employee nama="Bumi" gambar="https://smktelkom-mlg.sch.id/assets/frontend/images/image1001.png"
     tglTerbit="2022-02-01" harga="Rp80.000" penerbit="Gramedia"
     kota="Jakarta" genre="Novel" >

     </Employee>
    </div>
  );
}

export default App;
