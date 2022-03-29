// import logo from './logo.svg';
// import Employee from './components/Employee';
// import Accordion from './components/Accordion';
import Balok from './pages/Balok';
import Student from './pages/Student';
import Books from './pages/Books';
import School from './pages/School'
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Test from "./components/Test";

function App() {
  return (
    // digunakan untuk grouping(mengelompokkan) atau pengatur jalan dari url
    // atau path yang ditentukan oleh user
    <BrowserRouter basename='/my-react'> 
      {/*grouping path path atau url yang didefinisikan */}
      <Navbar />
      <Routes>
        <Route path="/balok" element={<Balok />} />
        <Route path="/books" element={<Books />} />
        <Route path="/student" element={<Student />} />
        <Route path="/school" element={<School />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
