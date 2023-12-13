import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


const initialState = {
  Name: '',
  Registration_No: '',
  Address_1: '',
  Address_2: '',
  City: '',
  State: '',
  Pincode: '',
  PHone_No: '',
  Email_id: '',
  Web_site: ''
}

const Detailedit = () => {
  const { id } = useParams();
  const [state, setState] = useState(initialState);
  const { Name, Registration_No, Address_1, Address_2, City, State, Pincode, PHone_No, Email_id, Web_site } = state;


  const navigate = useNavigate();


  useEffect(() => {
    // Fetch enginer details based on the id parameter
    const fetchEnginerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/hospital_detail/${id}`);
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

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:5000/hospital_detail/${id}`, {
        Name,
        Registration_No,
        Address_1,
        Address_2,
        City,
        State,
        Pincode,
        PHone_No,
        Email_id,
        Web_site,
      });

      if (response.status === 200) {
        toast.success('Data Updated successfully', {
          position: 'top-right',
          autoClose: 3000, // Close the toast after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // You might want to close the edit form or perform other actions after successful update
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
    setTimeout(() => navigate('/Details'), 700);
  };


  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state, [name]: value,
    });
  };



  return (
    <>
      <ToastContainer />
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



      <div class="container p-5">
        <div class="formcontainer formfilter p-3 ">
          <form onSubmit={handleUpdate} >
            <h3 class="text-center mt-3">Hospital Details</h3>
            <div class="row mt-3">
              <div class="offset-1 col-md-5">
                <label for="name" class="form-label ">Name</label>
                <input type="text" id="name" name='Name' value={Name} class="form-control" autocomplete="off" onChange={handleInputChange} required placeholder="Enter name" />
              </div>
              <div class="col-md-5">
                <label for="Regnumber" class="form-label ">Registration No.</label>
                <input type="number" id="Regnumber" name='Registration_No' value={Registration_No} class="form-control" onChange={handleInputChange} placeholder="Regis. No." />
              </div>
            </div>

            <div class="row mt-2">
              <div class="offset-1 col-md-5">
                <label for="addname" class="form-label ">Address 1</label>
                <input type="text" id="addname" class="form-control" value={Address_1} name='Address_1' onChange={handleInputChange} autocomplete="off" required
                  placeholder="Enter Address1" />
              </div>
              <div class="col-md-5">
                <label for="addtext" class="form-label ">Address 2</label>
                <input type="text" id="addtext" class="form-control" value={Address_2} name='Address_2' onChange={handleInputChange} placeholder="Enter Address2" />
              </div>
            </div>

            <div class="row mt-2">
              <div class="offset-1 col-md-5">
                <label for="city" class="form-label ">City</label>
                <input type="text" id="city" class="form-control" autocomplete="off" value={City} name='City' onChange={handleInputChange} required placeholder="Enter City" />
              </div>
              <div class="col-md-5">
                <label for="State" class="form-label ">State</label>
                <input type="text" id="State" class="form-control" value={State} name='State' onChange={handleInputChange} placeholder="Enter State" />
              </div>
            </div>
            <div class="row mt-2">
              <div class="offset-1 col-md-5">
                <label for="pincode" class="form-label ">PinCode</label>
                <input type="number" id="pincode" class="form-control" value={Pincode} name='Pincode' onChange={handleInputChange} autocomplete="off" required
                  placeholder="Enter Pincode" />
              </div>
              <div class="col-md-5">
                <label for="number" class="form-label ">Contact Number</label>
                <input type="number" id="number" class="form-control" value={PHone_No} name='PHone_No' onChange={handleInputChange} placeholder="Enter Contact" />
              </div>
            </div>
            <div class="row mt-2">
              <div class="offset-1 col-md-5">
                <label for="Email" class="form-label ">Email Id</label>
                <input type="email" id="Email" class="form-control" value={Email_id} name='Email_id' onChange={handleInputChange} autocomplete="off" required
                  placeholder="Enter Mail" />
              </div>
              <div class="col-md-5">
                <label for="Site" class="form-label ">Web Site</label>
                <input type="text" id="Site" class="form-control" value={Web_site} name='Web_site' onChange={handleInputChange} placeholder=" Enter Web Site" />
              </div>
            </div>

            <button type="submit" class="offset-1 btn btn-success mt-4 mb-4">Submit</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Detailedit;
