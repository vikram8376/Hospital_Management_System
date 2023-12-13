import './App.css';
import Desboard from './Components/Desboard';
import Employee from './Components/Employee';
import OPD_list from './Components/OPD_list';
import Patient from './Components/Patient';
import OpdReports from './Components/OpdReports';
import Doctor_opd from './Components/Doctor_opd';
import Opd_services from './Components/Opd_services';
import Hospital_details from './Components/Hospital_details';
import AddEmployee from './Components/AddEmployee';
import EditForm from './Components/EditForm';
import Appoinment from './Components/Appoinment';
import EditOPD from './Components/EditOPD';
import Detailedit from './Components/Detailedit';
import Services from './Components/Services';
import Services_list from './Components/Services_list';
import EditServices from './Components/EditServices';
import About from './Components/About';
import {BrowserRouter , Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path='/' element={<Desboard/>}></Route>
        <Route path='/employees' element={<Employee/>}></Route>
        <Route path='/OpdList' element={<OPD_list/>}></Route>
        <Route path='/Patients' element={<Patient/>}></Route>
        <Route path='/Opd_reports' element={<OpdReports/>}></Route>
        <Route path='/Doctors_opd' element={<Doctor_opd/>}></Route>
        <Route path='/Opd_services' element={<Opd_services/>}></Route>
        <Route path='/Details' element={<Hospital_details/>}></Route>
        <Route path='/addemployee' element={<AddEmployee/>}></Route>
        <Route path='/employee/:id' element={<EditForm/>}></Route>
        <Route path='/Appointment_book' element={<Appoinment/>}></Route>
        <Route path='/OPD_list/:id' element={<EditOPD/>}></Route>
        <Route path='/hospital_detail/:id' element={<Detailedit/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/serices_list' element={<Services_list/>}></Route>
        <Route path='/serices_list/:id' element={<EditServices/>}></Route>
        <Route path='/Abouts' element={<About/>}></Route>


        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
