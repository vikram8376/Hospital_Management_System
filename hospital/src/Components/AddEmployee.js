import React from 'react';
import { useState } from 'react';
import './addemp.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {


  const [Name, setname] = useState('');
  const [Lastname, setlastname] = useState('');
  const [Mobile_No, setmobile] = useState('');
  const [Alt_No, setaltno] = useState('');
  const [Email, setEmail] = useState('');
  const [Gender, setGender] = useState('');
  const [DOB, setDob] = useState('');
  const [DOJ, setDoj] = useState('');
  const [Password, setpassword] = useState('');
  const [Department, setDepartment] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/employee_list', {
        Name,
        Lastname,
        Mobile_No,
        Alt_No,
        Email,
        Gender,
        DOB,
        DOJ,
        Password,
        Department
      });

      console.log('Response:', response.data);
      navigate('/employees');
    } catch (error) {
      console.error('Error:', error);

    }
  };

  return (
    <>
      <div id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h1>Medilab</h1>
            </div>

            <div className="col-md-4">
              <ul id="menu" className="items">
                <Link to='/' className='text-decoration-none'>
                  <li><a href="" className='text-decoration-none'> Home</a></li>
                </Link>

                <Link to='/Abouts' className='text-decoration-none'>
                  <li><a href="" className='text-decoration-none'> About</a></li>
                </Link>
                <Link to='/Services' className='text-decoration-none'>
                  <li><a href="#" className='text-decoration-none'>Services </a></li>
                </Link>

                <Link to='/employees' className='text-decoration-none'>
                  <li><a href="#" className='text-decoration-none'>Employee</a></li>
                </Link>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Details
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-start" // Use "dropdown-menu-start" to make it slide from top
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link to="/OpdList" className="dropdown-item text-dark">
                        OPD List
                      </Link>
                    </li>
                    <li>
                      <Link to="/Patients" className="dropdown-item text-dark">
                        Patients
                      </Link>
                    </li>
                    <li>
                      <Link to="/Details" className="dropdown-item text-dark">
                        Hospital Details
                      </Link>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
            <div className="col-md-4">
              <form className="d-flex mt-2">
                <input type="text" className="form-control" role="search" placeholder="Search" />
                <button type="button" className="btn btn-success mx-3">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>



      <div className="container">
        <form onSubmit={handleSubmit} className="mt-5 addform ">
          <div className="row">
            <h2 className="text-center mb-4 mt-4">Add Employee</h2>
            <div className="offset-1 col-md-5">
              <label for="name" className="form-label ">Name</label>
              <input type="text" id="name" value={Name} className="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={e => setname(e.target.value)} />
            </div>
            <div class=" col-md-5">
              <label for="middlename" class="form-label ">Last Name</label>
              <input type="text" id="middlename" value={Lastname} class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={e => setlastname(e.target.value)} />
            </div>
          </div>
          <div class="row mt-3">
            <div class="offset-1 col-md-5">
              <label for="mobile" class="form-label ">Mobile</label>
              <input type="number" id="mobile" value={Mobile_No} class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={e => setmobile(e.target.value)} />
            </div>
            <div class="col-md-5">
              <label for="netnumber" class="form-label ">AlterNet Mobile Number</label>
              <input type="number" id="netnumber" value={Alt_No} class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={e => setaltno(e.target.value)} />
            </div>
          </div>

          <div class="row mt-3">
            <div class="offset-1 col-md-5">
              <label for="mail" class="form-label ">Email</label>
              <input type="email" id="mail" value={Email} class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={e => setEmail(e.target.value)} />
            </div>
            <div class="col-md-5">
              <label for="Gender" class="form-label ">Gender</label>
              <select id="Gender" class="form-select" value={Gender} onChange={e => setGender(e.target.value)}>
                <option selected>Choose Gender.....</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>


          <div class="row mt-3">
            <div class="offset-1 col-md-5">
              <label for="Dob" class="form-label ">DOB</label>
              <input type="date" id="Dob" value={DOB} class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={e => setDob(e.target.value)} />
            </div>
            <div class="col-md-5">
              <label for="doj" class="form-label ">Date Of join</label>
              <input type="date" id="doj" value={DOJ} class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={e => setDoj(e.target.value)} />
            </div>
          </div>


          <div class="row mt-3">
            <div class="offset-1 col-md-5">
              <label for="Secure" class="form-label ">Password</label>
              <input type="password" value={Password} id="Secure" class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={e => setpassword(e.target.value)} />
            </div>
            <div class="col-md-5">
              <label for="Gender" class="form-label ">Department</label>
              <select id="Gender" class="form-select" value={Department} onChange={e => setDepartment(e.target.value)}>
                <option selected>Choose Department.....</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="offset-1 col-md-5 mt-4 mb-5">
              <button class="btn btn-primary" type="submit">ADD Employtee</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddEmployee;
