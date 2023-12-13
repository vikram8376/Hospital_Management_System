import React from 'react'
import { Link } from 'react-router-dom';
import './services.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';

const Services = () => {

    const [Name, setname] = useState('');
    const [Amount, setAmount] = useState('');
    const [Services, setServices] = useState('');
    const [valid, setvalid] = useState('');
    const [Discount, setDiscount] = useState('');
    const [Doctor, setDoctor] = useState('');


    const resetForm = () => {
        setname('');
        setAmount('');
        setServices('');
        setvalid('');
        setDiscount('');
        setDoctor('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/Service', {
                Name,
                Amount,
                Services,
                valid,
                Discount,
                Doctor,
            });

            console.log('Response:', response.data);

            if (response.status === 200) {
                toast.success('Booked successfully', {
                    position: 'top-right',
                    autoClose: 3000, // Close the toast after 3 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                resetForm();
            }



            //   navigate('/Appointment_book');
        } catch (error) {
            if (error.response) {
                // The request was made, but the server responded with a status code that falls out of the range of 2xx
                console.error('Server Error:', error.response.data);
            } else if (error.request) {
                // The request was made, but no response was received
                console.error('No Response from Server');
            } else {
                // Something happened in setting up the request that triggered an error
                console.error('Error:', error.message);
            }
        }
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
                                    <li><a href="" className='text-decoration-none'>Home</a></li>
                                </Link>

                                <Link to='/Abouts' className='text-decoration-none'>
                                    <li><a href="" className='text-decoration-none'>About</a></li>
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



            <div class="container ">


                <form onSubmit={handleSubmit} class=" p-2 serviceback">
                    <h2 class="text-center  mt-5">Services</h2>
                    <div class="row mt-4">
                        <div class=" offset-1 col-5">
                            <label for="name" class="form-label ">Name</label>
                            <input type="text" id="name" class="form-control" autocomplete="off" onChange={e => setname(e.target.value)} required placeholder="Enter a name" />
                        </div>
                        <div class="col-5">
                            <label for="amount" class="form-label ">Amount</label>
                            <input type="number" id="amount" class="form-control" onChange={e => setAmount(e.target.value)} required placeholder="Enter a Amount" />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class=" offset-1 col-5">
                            <label for="services" class="form-label ">Services Type</label>
                            <input type="text" id="services" class="form-control" autocomplete="off" onChange={e => setServices(e.target.value)} required placeholder="Enter a name" />
                        </div>
                        <div class="col-5">
                            <label for="date" class="form-label ">Valid Day</label>
                            <input type="date" id="date" class="form-control" onChange={e => setvalid(e.target.value)} />
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="offset-1 col-5">
                            <label for="discount" class="form-label ">Discount</label>
                            <input type="number" id="discount" class="form-control" onChange={e => setDiscount(e.target.value)} required placeholder="Enter a Amount" />
                        </div>
                        <div class="col-5">
                            <label for="Doctor" class="form-label ">Doctor </label>
                            <input type="text" id="Doctor" class="form-control" autocomplete="off" onChange={e => setDoctor(e.target.value)} required placeholder="Enter a name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class=" offset-1 col-12 mt-4 mb-5">
                            <button class="btn btn-primary" type="submit">Submit</button>
                            <Link to='/serices_list'>
                                <button style={{ marginLeft: '50px' }} class="btn btn-primary" type="submit"><a class="text-white text-decoration-none" href="">Go To List</a></button>
                            </Link>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Services;
