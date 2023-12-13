import React from 'react';
import './editform.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const initialState = {
  Name: '',
  Lastname: '',
  Mobile_No: '',
  Alt_No: '',
  Email: '',
  Gender: '',
  DOB: '',
  DOJ: '',
  Password: '',
  Department: ''
}

const EditForm = () => {

  const { id } = useParams();
  const [state, setState] = useState(initialState);
  const { Name, Lastname, Mobile_No, Alt_No, Email, Gender, DOB, DOJ, Password, Department } = state;


  useEffect(() => {
    // Fetch enginer details based on the id parameter
    const fetchEnginerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/employee/${id}`);
        if (response.status === 200) {
          // Update the state with the fetched data
          setState(response.data);
        }
      } catch (error) {
        console.error('Error fetching enginer details:', error);
      }
    };

    fetchEnginerDetails();
  }, [id]);

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:5000/employee/${id}`, {
        Name,
        Lastname,
        Mobile_No,
        Alt_No,
        Email,
        Gender,
        DOB,
        DOJ,
        Password,
        Department,
      });

      if (response.status === 200) {
        alert('Data updated successfully');
        // You might want to close the edit form or perform other actions after successful update
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
    setTimeout(() => navigate('/employees'), 500);
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state, [name]: value,
    });
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
        <form onSubmit={handleUpdate} className="mt-5 addform ">
          <div className="row">
            <h2 className="text-center mb-4 mt-4">Edit Details</h2>
            <div className="offset-1 col-md-5">
              <label for="name" className="form-label ">Name</label>
              <input type="text" id="name" name='Name' value={Name} className="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={handleInputChange} />
            </div>
            <div class=" col-md-5">
              <label for="middlename" class="form-label ">Last Name</label>
              <input type="text" id="middlename" name='Lastname' value={Lastname} class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={handleInputChange} />
            </div>
          </div>
          <div class="row mt-3">
            <div class="offset-1 col-md-5">
              <label for="mobile" class="form-label ">Mobile</label>
              <input type="number" id="mobile" name='Mobile_No' value={Mobile_No} class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={handleInputChange} />
            </div>
            <div class="col-md-5">
              <label for="netnumber" class="form-label ">AlterNet Mobile Number</label>
              <input type="number" id="netnumber" name='Alt_No' value={Alt_No} class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={handleInputChange} />
            </div>
          </div>

          <div class="row mt-3">
            <div class="offset-1 col-md-5">
              <label for="mail" class="form-label ">Email</label>
              <input type="email" id="mail" name='Email' value={Email} class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={handleInputChange} />
            </div>
            <div class="col-md-5">
              <label for="Gender" class="form-label ">Gender</label>
              <select id="Gender" class="form-select" name='Gender' value={Gender} onChange={handleInputChange}>
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
              <input type="date" id="Dob" name='DOB' value={DOB} class="form-control" autocomplete="off" required
                placeholder="Enter a Date" onChange={handleInputChange} />
            </div>
            <div class="col-md-5">
              <label for="doj" class="form-label ">Date Of join</label>
              <input type="date" id="doj" name='DOJ' value={DOJ} class="form-control" autocomplete="off" required
                placeholder="Enter a Date" onChange={handleInputChange} />
            </div>
          </div>


          <div class="row mt-3">
            <div class="offset-1 col-md-5">
              <label for="Secure" class="form-label ">Password</label>
              <input type="password" value={Password} id="Secure" name='Password' class="form-control" autocomplete="off" required
                placeholder="Enter a name" onChange={handleInputChange} />
            </div>
            <div class="col-md-5">
              <label for="Gender" class="form-label ">Department</label>
              <select id="Gender" class="form-select" name='Department' value={Department} onChange={handleInputChange}>
                <option selected>Choose Department.....</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="offset-1 col-md-5 mt-4 mb-5">
              <button class="btn btn-primary" type="submit">Update</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditForm;
