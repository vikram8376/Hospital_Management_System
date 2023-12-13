import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const initialState = {
    Name: '',
    Amount: '',
    Services: '',
    valid: '',
    Discount: '',
    Doctor: '',
}

const EditServices = () => {


    const { id } = useParams();
    const [state, setState] = useState(initialState);
    const { Name, Amount, Services, valid, Discount, Doctor } = state;


    useEffect(() => {
        // Fetch enginer details based on the id parameter
        const fetchEnginerDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/Service_list/${id}`);
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
            const response = await axios.put(`http://localhost:5000/Service_list/${id}`, {
                Name,
                Amount,
                Services,
                valid,
                Discount,
                Doctor,
            });

            if (response.status === 200) {
                // You might want to close the edit form or perform other actions after successful update
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
        setTimeout(() => navigate('/serices_list'), 500);
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


            <div class="container ">


                <form onSubmit={handleUpdate} class=" p-2 serviceback">
                    <h2 class="text-center  mt-5">Services</h2>
                    <div class="row mt-4">
                        <div class=" offset-1 col-5">
                            <label for="name" class="form-label ">Name</label>
                            <input type="text" id="name" class="form-control" value={Name} name='Name' autocomplete="off" onChange={handleInputChange} required placeholder="Enter a name" />
                        </div>
                        <div class="col-5">
                            <label for="amount" class="form-label ">Amount</label>
                            <input type="number" id="amount" class="form-control" value={Amount} name='Amount' onChange={handleInputChange} required placeholder="Enter a Amount" />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class=" offset-1 col-5">
                            <label for="services" class="form-label ">Services Type</label>
                            <input type="text" id="services" class="form-control" value={Services} name='Services' autocomplete="off" onChange={handleInputChange} required placeholder="Enter a name" />
                        </div>
                        <div class="col-5">
                            <label for="date" class="form-label ">Valid Day</label>
                            <input type="date" id="date" class="form-control" value={valid} name='valid' onChange={handleInputChange} />
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="offset-1 col-5">
                            <label for="discount" class="form-label ">Discount</label>
                            <input type="number" id="discount" class="form-control" value={Discount} name='Discount' onChange={handleInputChange} required placeholder="Enter a Amount" />
                        </div>
                        <div class="col-5">
                            <label for="Doctor" class="form-label ">Doctor </label>
                            <input type="text" id="Doctor" class="form-control" autocomplete="off" value={Doctor} name='Doctor' onChange={handleInputChange} required placeholder="Enter a name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class=" offset-1 col-12 mt-4 mb-5">
                            <button class="btn btn-primary" type="submit">Update</button>
                        </div>

                    </div>
                </form>
            </div>

        </>
    )
}

export default EditServices
