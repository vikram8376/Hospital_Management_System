import React from 'react';
import './about.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const About = () => {
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

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mt-5">
            <img src="teams.jpg" alt="" width="630px" height="600px" />
          </div>

          <div className="col-md-6 mt-5">
            <h4 style={{ margintop: '50px' }}>Hospital news and research. Since 2004, News Medical is one of the world's leading open-access medical and life science hubs</h4>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

            <div className="icons-box">
              <div className="icon">
                <i style={{ fontSize: '40px' }} className="fa fa-heart"></i>
              </div>
              <div>
              <h4 className="title">lorense bisnoi</h4>
              <p className="discription">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
              
            </div>

            <div className="icons-box">
              <div className="icon">
                <i style={{ fontSize: '40px' }} className="fa fa-hospital-o"></i>
              </div>
              <div>
              <h4 className="title">lorense bisnoi</h4>
              <p className="discription">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>

            <div className="icons-box">
              <div className="icon">
                <i style={{ fontSize: '40px' }} className="fa fa-h-square"></i>
              </div>
              <div>
              <h4 className="title">lorense bisnoi</h4>
              <p className="discription">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="counts">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <div className="count-box">
                <i style={{ fontSize: '40px' }} className="fa fa-user-md"></i><br />
                <span style={{ fontSize: '20px' }}>85</span>
                <p style={{ fontSize: '25px' }}>Doctors</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="count-box">
                <i style={{ fontSize: '40px' }} className="fa fa-hospital-o"></i><br />
                <span style={{ fontSize: '20px' }} >18</span>
                <p style={{ fontSize: '25px' }}>Departments</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="count-box">
                <i style={{ fontSize: '40px' }} className="fa fa-h-square"></i><br />
                <span style={{ fontSize: '20px' }} >12</span>
                <p style={{ fontSize: '25px' }}>Reserch-Lab</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="count-box">
                <i style={{ fontSize: '40px' }} className="fa fa-h-square"></i><br />
                <span style={{ fontSize: '20px' }}>150</span>
                <p style={{ fontSize: '25px' }}>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fulid mt-4">
        <h2 className="text-center mb-4">Contact</h2>
        <p className="text-center">Hello, this is Bing. I can help you find maps of different places and directions to your destination. 😊

          There are many online services that provide maps and navigation features. Here are some of the most popular ones:</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892301.9721455005!2d74.59200904687499!3d29.118828700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123363837686f1%3A0x445ec716639967e5!2sAadhar%20Hospital%20-%20Aadhar%20Health%20Institute%20%7C%20Hisar!5e0!3m2!1sen!2sin!4v1693549675377!5m2!1sen!2sin" width="1350" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
        <div className="container">
          <div className="row">
            <div className="col-4">
              <p className="mt-2">© Copyright Medilab. All Rights Reserved</p>
              <p>Designed by<span style={{ color: 'blue' }}> Vikram Lohan</span></p>
            </div>
            <div className="col-8">
              <div className="social-media">
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

export default About;
