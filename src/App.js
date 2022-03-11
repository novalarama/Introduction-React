// import logo from './logo.svg';
import './App.css';
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <h3 align="center">This is my custom components</h3>
      {/*
        name of element : h3
        attributes/properties : align
     */}

     <Test />
     <Test name="Rani" fontColor="grey"
     avatar="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
     >Rani adalah murid
      <button></button>
     </Test>
     <Test name="Cahyo" fontColor="blue"
     avatar="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
     >Cahyo adalah guru</Test>
    </div>
  );
}

export default App;
