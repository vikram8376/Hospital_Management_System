import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Hospital_detail.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




const Hospital_details = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const response = await axios.get('http://localhost:5000/hospital_detail')
    if (response.status === 200) {
      setdata(response.data)
    }
  };

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/hospital_detail/${id}`);
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

      {data && data.map((item) => {
        return (
          <div class="container my-4">
            <div className='formfilter rounded p-3 '>
              <h2 class=" text-center  ">Hospital Details</h2>
              <div class="row">
                <div class="col-md-12 mb-2" style={{ marginLeft: '1000px' }}>


                  <button type="button" class="btn btn-success"> <a class="text-white text-decoration-none" href="" onClick={() => handleEdit(item.id)} >Edit</a></button>

                </div>
              </div>

              <div class="row">
                <div class="offset-2 col-md-5">
                  <p><strong>ID:</strong>{item.id}</p>
                  <p><strong>Name:</strong> <span class="label-value">{item.Name}</span></p>
                  <p><strong>Registration No.:</strong> <span class="label-value">{item.Registration_No}</span></p>
                  <p><strong>Address 1:</strong> <span class="label-value">{item.Address_1}</span></p>
                  <p><strong>Address 2:</strong> <span class="label-value">{item.Address_2}</span></p>
                  <p><strong>City:</strong> <span class="label-value">{item.City}</span></p>
                </div>
                <div class="col-md-5">
                  <p><strong>State:</strong> <span class="label-value">{item.State}</span></p>
                  <p><strong>Pincode:</strong> <span class="label-value">{item.Pincode}</span></p>
                  <p><strong>Contact Number:</strong> <span class="label-value">{item.PHone_No}</span></p>
                  <p><strong>Email:</strong> <span class="label-value">{item.Email_id}</span></p>
                  <p><strong>Website:</strong> <a href="#">{item.Web_site}</a></p>
                </div>
              </div>

            </div>

          </div>
        )
      })};



      <div class="container">
        <div class="row ">
          <h3 class="text-center mt-4">Owners</h3>
          <div class="col-md-6 mt-5">
            <div class="service-box text-center">
              <img src="rani.webp" alt="" width="200px" height="200px" class="rounded-circle" />
              <h5 class="mt-3 fw-bold">Aurora Halsinki</h5>
              <p>Dr.Aurora Halsinki Dr. Kevin Pho is a board-certified internal medicine physician.</p>
              <div class="social">
                <a className='icon' href=""><i className="fa fa-instagram"></i></a>
                <a className='icon' href=""><i className="fa fa-facebook"></i></a>
                <a className='icon' href=""><i className="fa fa-twitter"></i></a>
                <a className='icon' href=""><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-5">
            <div class="service-box text-center">
              <img src="rani2.webp" alt="" width="200px" height="200px" class="rounded-circle" />
              <h5 class="mt-3 fw-bold">Nayrobi Raja</h5>
              <p>Welcome to Common Sense Family Doctor by Dr Kenny. He is a board-certified Family . </p>
              <div className="social">
                <a className='icon' href=""><i className="fa fa-instagram"></i></a>
                <a className='icon' href=""><i className="fa fa-facebook"></i></a>
                <a className='icon' href=""><i className="fa fa-twitter"></i></a>
                <a className='icon' href=""><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="footersction">
        <div className="container">
          <div className="row mt-5 text-white ">
            <div className="col-md-3 ">
              <h2>Medilab</h2>
              <span>A108 Adam Street</span><br />
              <span>New York, NY 535022</span><br />
              <span>United States</span><br />
              <span className="fw-bold">Phone No. <span class="fw-bold">9728018378</span></span><br />
              <span className="fw-bold">Email Id :<span class="fw-bold">Vikram341@gmail.com</span></span>
            </div>
            <div className="col-md-3">
              <h2>Services</h2>
              <ul className="list-unstyled mt-3">
                <li><a className="text-white text-decoration-none" href=""> Eye care</a></li>
                <li><a className="text-white text-decoration-none" href="">  Cardiac are</a></li>
                <li><a className="text-white text-decoration-none" href=""> Heart care</a></li>
                <li><a className="text-white text-decoration-none" href=""> Heart</a></li>
                <li><a className="text-white text-decoration-none" href=""> Brain</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2>Membership</h2>
              <ul className="list-unstyled mt-3">
                <li><a className="text-white text-decoration-none" href=""> Free trial</a></li>
                <li><a className="text-white text-decoration-none" href=""> Silver</a></li>
                <li><a className="text-white text-decoration-none" href=""> Premium</a></li>
                <li><a className="text-white text-decoration-none" href=""> Discount</a></li>
                <li><a className="text-white text-decoration-none" href=""> Brain</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2>Customer Care</h2>
              <ul className="list-unstyled mt-3">
                <li><a className="text-white text-decoration-none" href=""> About Us</a></li>
                <li><a className="text-white text-decoration-none" href=""> Contact Us</a></li>
                <li><a className="text-white text-decoration-none" href=""> Get Update</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div id="lastsection">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <p class="mt-2">© Copyright Medilab. All Rights Reserved</p>
              <p>Designed by<span style={{ color: 'blue' }}> Vikram Lohan</span></p>
            </div>
            <div class="col-8">
              <div class="social-media">
                <a className='icon' href=""><i className="fa fa-instagram"></i></a>
                <a className='icon' href=""><i className="fa fa-facebook"></i></a>
                <a className='icon' href=""><i className="fa fa-twitter"></i></a>
                <a className='icon' href=""><i className="fa fa-linkedin"></i></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Hospital_details;
