import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FormLogin from '../components/moleculas/FormLogin';
import FormRegister from '../components/moleculas/FormRegister';
import FormAlta from '../components/moleculas/FormAlta';
import Helcome from '../pages/Helcome';
import Home from '../pages/Home';

export default function App() {
    /*formik react para formularios */
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<FormLogin/>}/>
        <Route path='/register' element={<FormRegister/>}/>
        <Route path='/alta' element={<FormAlta/>}/>
        <Route path='/helcome' element={<Helcome/>}/>
    </Routes>
 </BrowserRouter>
  )
}
