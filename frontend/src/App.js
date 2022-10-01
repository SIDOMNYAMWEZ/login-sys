import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";
import Register from './components/Register';
import ContentPage from './components/ContentPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position='top-center' limit={1} />
      <div className="">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/signup' element={<Register/>} />
          <Route path='/content' element={<ProtectedRoute><ContentPage/></ProtectedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
