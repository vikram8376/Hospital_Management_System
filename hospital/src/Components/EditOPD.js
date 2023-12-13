import React from 'react'
import './editopd.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const initialState = {
    Name: '',
    Phone_No: '',
    Address: '',
    Gender: '',
    Doctor: '',
    Service: '',
    DOJ: '',
    Valid: '',
    BP: '',
    Weight: '',
    Temp: '',
    Amount: '',
};


const EditOPD = () => {
    const { id } = useParams();
    const [state, setState] = useState(initialState);
    const { Name, Phone_No, Address, Gender, Doctor, Service, DOJ, Valid, BP, Weight, Temp, Amount } = state;


    useEffect(() => {
        // Fetch enginer details based on the id parameter
        const fetchEnginerDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/OPD_list/${id}`);
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
            const response = await axios.put(`http://localhost:5000/OPD_list/${id}`, {
                Name,
                Phone_No,
                Address,
                Gender,
                Doctor,
                Service,
                DOJ,
                Valid,
                BP,
                Weight,
                Temp,
                Amount,
            });

            if (response.status === 200) {
                alert('Data updated successfully');
                // You might want to close the edit form or perform other actions after successful update
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
        setTimeout(() => navigate('/OpdList'), 500);
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

            <div id="formheader">
                <div className="container mt-5 background">
                    <form onSubmit={handleUpdate} className="p-5" autocomplete="off">
                        <h1 className="text-center  mb-5">Edit OPD</h1>
                        <div className="row">
                            <div className="col-4">
                                <label for="name" className="form-label ">Name</label>
                                <input type="text" name='Name' value={Name} id="name" className="form-control" onChange={handleInputChange} autocomplete="off" required placeholder="Enter a name" />
                            </div>
                            <div className="col-4">
                                <label for="number" className="form-label">Mobile No.</label>
                                <input type="number" name='Phone_No' value={Phone_No} id="number" className="form-control" onChange={handleInputChange} placeholder="Enter Number" />
                            </div>
                            <div className="col-4">
                                <label for="address" className="form-label ">Address</label>
                                <input type="text" name='Address' value={Address} id="address" className="form-control" onChange={handleInputChange} placeholder="Enter Address" />
                            </div>
                        </div>


                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label for="Gender" className="form-label ">Gender</label>
                                <select id="Gender" name='Gender' value={Gender} className="form-select" onChange={handleInputChange}>
                                    <option selected>Choose Gender.....</option>
                                    <option value="Haryana">Male</option>
                                    <option value="Punjab">Female</option>
                                    <option value="Utrakhand">Others</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label for="doctor" className="form-label ">Doctors</label>
                                <input type="text" name='Doctor' value={Doctor} id="doctor" className="form-control" onChange={handleInputChange} placeholder="Doctor name" />
                            </div>
                            <div className="col-md-4">
                                <label for="services" className="form-label ">Services</label>
                                <input type="text" name='Service' value={Service} id="services" className="form-control" onChange={handleInputChange} placeholder="Type Services" />
                            </div>
                        </div>


                        <div className="row mt-3">

                            <div className="col-4">
                                <label for="doj" className="form-label ">Date Of Join</label>
                                <input type="date" name='DOJ' value={DOJ} id="doj" className="form-control" onChange={handleInputChange} />
                            </div>
                            <div className="col-4">
                                <label for="valid" className="form-label ">Valid Up To</label>
                                <input type="date" name='Valid' value={Valid} id="valid" className="form-control" onChange={handleInputChange} />
                            </div>
                            <div className="col-4">
                                <label for="Bp" className="form-label ">BP</label>
                                <input type="number" name='BP' id="Bp" value={BP} className="form-control" placeholder="Blood Pressure" onChange={handleInputChange} />
                            </div>
                        </div>


                        <div className="row mt-3">

                            <div className="col-4">
                                <label for="weight" className="form-label ">Weight</label>
                                <input type="number" name='Weight' value={Weight} id="weight" className="form-control" placeholder="Weight" onChange={handleInputChange} />
                            </div>
                            <div className="col-4">
                                <label for="temp" className="form-label ">Temerature</label>
                                <input type="number" name='Temp' value={Temp} id="temp" className="form-control" placeholder="temperature" onChange={handleInputChange} />
                            </div>
                            <div className="col-4">
                                <label for="Amount" className="form-label ">Amount</label>
                                <input type="number" name='Amount' value={Amount} id="Amount" className="form-control" placeholder="Enter Amount" onChange={handleInputChange} />
                            </div>
                        </div>


                        <div className="col-12 mt-5 text-center">
                            <button className="btn btn-primary" type="submit"> Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </>



    )
}

export default EditOPD;
