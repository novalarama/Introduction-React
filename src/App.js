// import logo from './logo.svg';
import Employee from './components/Employee';
import Accordion from './components/Accordion';
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
     {/* <Employee nama="Bumi" gambar="https://smktelkom-mlg.sch.id/assets/frontend/images/image1001.png"
     tglTerbit="2022-02-01" harga="Rp80.000" penerbit="Gramedia"
     kota="Jakarta" genre="Novel" > */}
     <Accordion header="Percobaan 1" firstLine="Hello, this is my first ">
     It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
     </Accordion>

     <Accordion header="Percobaan 2" firstLine="Hello, this is my Second ">
     It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
     </Accordion>

     {/* </Employee> */}
    </div>
  );
}

export default App;
