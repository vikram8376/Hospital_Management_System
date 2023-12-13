import React from 'react';
import { Link } from 'react-router-dom';
import './appoint.css';
import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Appoinment = () => {

    const [Name, setname] = useState('');
    const [Phone_No, setphone] = useState('');
    const [Address, setAddress] = useState('');
    const [Gender, setGender] = useState('');
    const [Doctor, setDoctor] = useState('');
    const [Service, setServices] = useState('');
    const [DOJ, setDoj] = useState('');
    const [BP, setBP] = useState('');
    const [Weight, setweight] = useState('');
    const [Valid, setValid] = useState('');
    const [Temp, settemp] = useState('');
    const [Amount, setamount] = useState('');


    const resetForm = () => {
        setname('');
        setphone('');
        setAddress('');
        setGender('');
        setDoctor('');
        setServices('');
        setDoj('');
        setBP('');
        setweight('');
        setValid('');
        settemp('');
        setamount('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/appoinments', {
                Name,
                Phone_No,
                Address,
                Gender,
                Doctor,
                Service,
                DOJ,
                BP,
                Weight,
                Valid,
                Temp,
                Amount
            });

            console.log('Response:', response.data);

            if (response.status === 200) {
                toast.success('Appointment booked successfully', {
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


            <div id="formheader">
                <div className="container mt-5 background">
                    <form onSubmit={handleSubmit} className="p-5" autocomplete="off">
                        <h1 className="text-center  mb-5">Make a Appointment</h1>
                        <div className="row">
                            <div className="col-4">
                                <label for="name" className="form-label ">Name</label>
                                <input type="text" value={Name} id="name" className="form-control" onChange={e => setname(e.target.value)} autocomplete="off" required placeholder="Enter a name" />
                            </div>
                            <div className="col-4">
                                <label for="number" className="form-label">Mobile No.</label>
                                <input type="number" value={Phone_No} id="number" className="form-control" onChange={e => setphone(e.target.value)} placeholder="Enter Number" />
                            </div>
                            <div className="col-4">
                                <label for="address" className="form-label ">Address</label>
                                <input type="text" value={Address} id="address" className="form-control" onChange={e => setAddress(e.target.value)} placeholder="Enter Address" />
                            </div>
                        </div>


                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label for="Gender" className="form-label ">Gender</label>
                                <select id="Gender" value={Gender} className="form-select" onChange={e => setGender(e.target.value)}>
                                    <option selected>Choose Gender.....</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Others</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label for="doctor" className="form-label ">Doctors</label>
                                <input type="text" value={Doctor} id="doctor" className="form-control" onChange={e => setDoctor(e.target.value)} placeholder="Doctor name" />
                            </div>
                            <div className="col-md-4">
                                <label for="services" className="form-label ">Services</label>
                                <input type="text" value={Service} id="services" className="form-control" onChange={e => setServices(e.target.value)} placeholder="Type Services" />
                            </div>
                        </div>


                        <div className="row mt-3">

                            <div className="col-4">
                                <label for="doj" className="form-label ">Date Of Join</label>
                                <input type="date" value={DOJ} id="doj" className="form-control" onChange={e => setDoj(e.target.value)} />
                            </div>
                            <div className="col-4">
                                <label for="doj" className="form-label ">Valid Up To</label>
                                <input type="date" value={Valid} id="doj" className="form-control" onChange={e => setValid(e.target.value)} />
                            </div>
                            <div className="col-4">
                                <label for="Bp" className="form-label ">BP</label>
                                <input type="number" id="Bp" value={BP} className="form-control" placeholder="Blood Pressure" onChange={e => setBP(e.target.value)} />
                            </div>
                        </div>


                        <div className="row mt-3">

                            <div className="col-4">
                                <label for="weight" className="form-label ">Weight</label>
                                <input type="number" value={Weight} id="weight" className="form-control" placeholder="Weight" onChange={e => setweight(e.target.value)} />
                            </div>
                            <div className="col-4">
                                <label for="temp" className="form-label ">Temerature</label>
                                <input type="number" value={Temp} id="temp" className="form-control" placeholder="temperature" onChange={e => settemp(e.target.value)} />
                            </div>
                            <div className="col-4">
                                <label for="Amount" className="form-label ">Amount</label>
                                <input type="number" value={Amount} id="Amount" className="form-control" placeholder="Enter Amount" onChange={e => setamount(e.target.value)} />
                            </div>
                        </div>


                        <div className="col-12 mt-5 text-center">
                            <button className="btn btn-primary" type="submit"> Appointment Booked</button>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}

export default Appoinment;
