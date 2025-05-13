
import { Route, Routes } from 'react-router';
import './App.css';
import Detail from './Component/Detail';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Aboutus from './Component/Aboutus';
import Services from './Component/Services';
import Login from './Component/Login';
import Notfound from './Component/Notfound';
import CreateAcc from './Component/CreateAcc';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="*" element={<Notfound />} /> 
        <Route path="/" element={<Detail />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/CreateAcc" element={<CreateAcc />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
