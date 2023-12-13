import React from 'react';
import './desh.css';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';


/* Example in App.css */



const Desboard = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        'back7.jpg',
        'doctor.webp',
        'back8.jpg',
        'back11.jpg',
        // Add more image paths as needed
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 4000); // Change image every 5 seconds (adjust as needed)

        return () => {
            clearInterval(interval);
        };
    }, []);

    const section1Style = {
        backgroundImage: `url(${images[currentImage]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '550px',
        width: '100%',
    };

    const cursiveStyle = {
        fontFamily: 'cursive',
    };

    const colortext = {
        color: '#FF0000',
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

            <div id="section1" style={section1Style}>

                <div className="container">
                    <div className="row">
                        <h1 className="margin ">WELCOME TO MEDILAB</h1>
                    </div>
                    <div className="row">
                        <h3 style={cursiveStyle}>We are team of <span style={colortext} >Talented Doctors </span>
                            making Life with Smile.</h3>
                    </div>
                    <Link to='/Appointment_book'>
                        <button type="button" className="btn btn-primary mt-3 rounded-pill p-2"><a className="text-white text-decoration-none"
                            href="">Make a Appointment</a></button>
                    </Link>
                </div>
            </div>


            <div id="display">
                <div className="container">
                    <div className="row">
                        <div className="offset-7 col-4 stethoscope">
                            <span>Nurturing Health..</span><br />
                            <span style={{ marginLeft: '100px' }}>Inspiring Lives</span>

                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid mt-5" id="services">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">Doctors</h2>
                    </div>
                    <div className="row ">
                        <div className="col-md-4 mt-5">
                            <div className="service-box text-center">
                                <img src='rani.webp' alt="" width="200px" height="200px" className="rounded-circle" />
                                <h5 className="mt-3 fw-bold">Aurora Halsinki</h5>
                                <p>Dr.Aurora Halsinki Dr. Kevin Pho is a board-certified internal medicine physician.</p>
                                <div className="social">
                                    <a className='icon' href=""><i className="fa fa-instagram"></i></a>
                                    <a className='icon' href=""><i className="fa fa-facebook"></i></a>
                                    <a className='icon' href=""><i className="fa fa-twitter"></i></a>
                                    <a className='icon' href=""><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="service-box text-center">
                                <img src="rani2.webp" alt="" width="200px" height="200px" className="rounded-circle" />
                                <h5 className="mt-3 fw-bold">Nayrobi Raja</h5>
                                <p>Welcome to Common Sense Family Doctor by Dr Kenny. He is a board-certified Family . </p>
                                <div className="social">
                                    <a className='icon' href=""><i className="fa fa-instagram"></i></a>
                                    <a className='icon' href=""><i className="fa fa-facebook"></i></a>
                                    <a className='icon' href=""><i className="fa fa-twitter"></i></a>
                                    <a className='icon' href=""><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="service-box text-center">
                                <img src="rani3.webp" alt="" width="200px" height="200px" className="rounded-circle" />
                                <h5 className="mt-3 fw-bold">Reio Gajsthmbe</h5>
                                <p>For nearly 40 years, Physician's Weekly LLC, has been a trusted source.</p>
                                <div className="social">
                                    <a className='icon' href=""><i className="fa fa-instagram"></i></a>
                                    <a className='icon' href=""><i className="fa fa-facebook"></i></a>
                                    <a className='icon' href=""><i className="fa fa-twitter"></i></a>
                                    <a className='icon' href=""><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-4 mt-5">
                            <div className="service-box text-center">
                                <img src="zoi.jpg" alt="" width="200px" height="200px" className="rounded-circle" />
                                <h5 className="mt-3 fw-bold">Alnshin Pakar</h5>
                                <p>Dr.Aurora Halsinki Dr. Kevin Pho is a board-certified internal medicine physician.</p>
                                <div className="social">
                                    <a className='icon' href=""><i className="fa fa-instagram"></i></a>
                                    <a className='icon' href=""><i className="fa fa-facebook"></i></a>
                                    <a className='icon' href=""><i className="fa fa-twitter"></i></a>
                                    <a className='icon' href=""><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="service-box text-center">
                                <img src="zoi2.jpg" alt="" width="200px" height="200px" className="rounded-circle" />
                                <h5 className="mt-3 fw-bold">Carla Mio</h5>
                                <p>Welcome to Common Sense Family Doctor by Dr Kenny. He is a board-certified Family . </p>
                                <div className="social">
                                    <a className='icon' href=""><i className="fa fa-instagram"></i></a>
                                    <a className='icon' href=""><i className="fa fa-facebook"></i></a>
                                    <a className='icon' href=""><i className="fa fa-twitter"></i></a>
                                    <a className='icon' href=""><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="service-box text-center">
                                <img src="zoi3.jpg" alt="" width="200px" height="200px" className="rounded-circle" />
                                <h5 className="mt-3 fw-bold">Lusiya Amiya</h5>
                                <p>For nearly 40 years, Physician's Weekly LLC, has been a trusted source.</p>
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
            </div>



            <div class="container-fluid mt-5 bg-light">
                <div class="row">
                    <div class="col-md-5">
                        <img src="consult.jpg" alt="" width="450px" height="400px" />
                    </div>
                    <div class="col-md-7 mt-5">
                        <h2 style={{ marginLeft: '100px' }} class="healthtext">Where Health Meets Care</h2>
                        <p style={{ marginLeft: '100px' }} class="mt-3">At Medanta, you are so much more than just a patient. We have
                            designed our patient rooms with an aim to take care of medical needs, maximise comfort, and
                            accommodate personal requirements for recovery.Care has been taken to ensure patient-centric design
                            choices, including providing patients a visual connection to the outside environment by bringing
                            natural light and viewing windows into every patient space possible.</p>
                        <Link to='/Appointment_book'>
                            <button style={{ marginLeft: '100px' }} type="button" class="btn btn-primary mt-3 rounded-pill"><a
                                class="text-white text-decoration-none" href="">Make a Appointment</a></button>
                        </Link>
                    </div>
                </div>
            </div>




            <div className="container-fluid mt-5" id="Deaparments">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="text-center">Departments</h2>
                    </div>
                </div>

                <div className="row justify-content-between mt-4">
                    <div className="col-md-4 text-center mt-4">
                        <img src="cardiology.jpg" alt="" width="350px" height="220px" className="rounded-5" />
                        <h4 className="fw-bold">Casualty department</h4>
                        <p>Department, is a medical treatment facility specializing in emergency medicine.</p>
                    </div>
                    <div className="col-md-4 text-center mt-4">

                        <img src="ot.jpg" alt="" width="350px" height="220px" className="rounded-5" />
                        <h4 className="fw-bold"> Operating theatre (OT)</h4>
                        <p>An operating theater also known as an operating room (OR), operating suite.</p>
                    </div>
                    <div className="col-md-4 text-center mt-4">

                        <img src="ot2.jpg" alt="" width="350px" height="220px" className="rounded-5" />
                        <h4 className="fw-bold"> Intensive care unit (ICU)</h4>
                        <p>Department, is a medical treatment facility specializing in emergency medicine.</p>
                    </div>
                </div>



                <div className="row">
                    <div className="col-md-4 text-center mt-4">

                        <img src="ot3.jpg" alt="" width="350px" height="220px" className="rounded-5" />
                        <h4 className="fw-bold">Ansiology department</h4>
                        <p>An operating theater also known as an operating room (OR), operating suite.</p>
                    </div>
                    <div className="col-md-4 text-center mt-4">

                        <img src="ot4.jpg" alt="" width="350px" height="220px" className="rounded-5" />
                        <h4 className="fw-bold"> Cardiology department</h4>
                        <p>Department, is a medical treatment facility specializing in emergency medicine.</p>
                    </div>
                    <div className="col-md-4 text-center mt-4">

                        <img src="ot5.jpg" alt="" width="350px" height="220px" className="rounded-5" />
                        <h4 className="fw-bold">ENT department</h4>
                        <p>An operating theater also known as an operating room (OR), operating suite.</p>
                    </div>

                </div>

            </div>




            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Gallery</h1>
                        <p className="text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga
                            eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                            suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                </div>
                <div className="row g-0 mt-4">
                    <div className="col-md-3">
                        <a href="https://bootstrapmade.com/demo/templates/Medilab/assets/img/gallery/gallery-1.jpg"><img
                            src="1.jpg" alt="" width="320px" height="230px" /></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://bootstrapmade.com/demo/templates/Medilab/assets/img/gallery/gallery-2.jpg"><img
                            src="2.jpg" alt="" width="320px" height="230px" /></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://bootstrapmade.com/demo/templates/Medilab/assets/img/gallery/gallery-3.jpg"><img
                            src="3.jpg" alt="" width="320px" height="230px" /></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://bootstrapmade.com/demo/templates/Medilab/assets/img/gallery/gallery-4.jpg"><img
                            src="4.jpg" alt="" width="330px" height="230px" /></a>
                    </div>
                </div>
                <div className="row g-0 mt-2">
                    <div className="col-md-3">
                        <a href="https://bootstrapmade.com/demo/templates/Medilab/assets/img/gallery/gallery-6.jpg"><img
                            src="5.jpg" alt="" width="320px" height="230px" /></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://bootstrapmade.com/demo/templates/Medilab/assets/img/gallery/gallery-7.jpg"><img
                            src="6.jpg" alt="" width="320px" height="230px" /></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://bootstrapmade.com/demo/templates/Medilab/assets/img/gallery/gallery-5.jpg"> <img
                            src="7.jpg" alt="" width="320px" height="230px" /></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://bootstrapmade.com/demo/templates/Medilab/assets/img/gallery/gallery-8.jpg"><img
                            src="8.jpg" alt="" width="330px" height="230px" /></a>
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

export default Desboard;
