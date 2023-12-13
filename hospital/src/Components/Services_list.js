import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';




const Services_list = () => {


    const [data, setdata] = useState([]);
    const [startDate, setStartDate] = useState(''); // Start date for filtering
    const [endDate, setEndDate] = useState('');
    const [name, setName] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [netAmount, setNetAmount] = useState(0);

    useEffect(() => {
        getServicesList();
    }, []);

    const getServicesList = async () => {
        const response = await axios.get('http://localhost:5000/Service_list')
        if (response.status === 200) {
            setdata(response.data)
            calculateTotalAmount(response.data);
            calculateTotalDiscount(response.data);
            calculateNetAmount(response.data);

        }
    };

    const calculateTotalAmount = (data) => {
        const total = data.reduce((accumulator, item) => accumulator + item.Amount, 0);
        setTotalAmount(total);
    };

    const calculateTotalDiscount = (data) => {
        const total = data.reduce((accumulator, item) => accumulator + item.Discount, 0);
        setTotalDiscount(total);
    };

    const calculateNetAmount = (data) => {
        const totalAmount = data.reduce((accumulator, item) => accumulator + item.Amount, 0);
        const totalDiscount = data.reduce((accumulator, item) => accumulator + item.Discount, 0);
        const net = totalAmount - totalDiscount;
        setNetAmount(net);
    };





    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/Service_list/${id}`);

            if (response.status === 200) {
                setdata((prevData) => prevData.filter((item) => item.id !== id));
                alert(' Are you sure Data is Deleting...');

            }
        } catch (error) {
            console.error('Error Deleting data:', error);
        }

    }

    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/serices_list/${id}`);
    };



    const filteredData = data.filter((item) => {
        // Date filter logic
        if (!startDate || !endDate) {
            return true; // If no date range is selected, show all data
        }
        const doj = new Date(item.valid);
        if (doj < new Date(startDate) || doj > new Date(endDate)) {
            return false; // Exclude items outside the date range
        }

        // Name and lastname filter logic
        if (name && item.Doctor.toLowerCase().indexOf(name.toLowerCase()) === -1) {
            return false; // Exclude items with names that don't match the filter
        }

        return true;
    });

    const calculatedTotalAmount = filteredData.reduce((accumulator, item) => accumulator + item.Amount, 0);
    const calculatedTotalDiscount = filteredData.reduce((accumulator, item) => accumulator + item.Discount, 0);
    const calculatedNetAmount = calculatedTotalAmount - calculatedTotalDiscount;

    // Set the state for these values
    useEffect(() => {
        setTotalAmount(calculatedTotalAmount);
        setTotalDiscount(calculatedTotalDiscount);
        setNetAmount(calculatedNetAmount);
    }, [filteredData]);





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


            <div className="container-fluid mt-3 border formfilter p-5 ">
                <div className="row mt-3">
                    <div className="col-md-3">
                        <label htmlFor="name">Doctor Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={name}
                            placeholder='Enter name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            className="form-control"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            className="form-control"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>



            <div className="container-fluid">
                <table className="table table-striped table-hover mt-4 bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name </th>
                            <th scope="col">Amount</th>
                            <th scope="col">Services</th>
                            <th scope="col">valid</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filteredData.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Amount}</td>
                                        <td>{item.Services}</td>
                                        <td>{item.valid}</td>
                                        <td>{item.Discount}</td>
                                        <td>{item.Doctor}</td>
                                        <td>
                                            <div>

                                                <button type="button" className="btn btn-outline-primary " onClick={() => handleEdit(item.id)} >Edit</button>

                                                <button type="button" className="btn btn-outline-danger buttonmargn" onClick={() => handleDelete(item.id)}>Delete</button>
                                            </div>
                                        </td>

                                    </tr>
                                );
                            })}
                    </tbody>
                </table>

                <div className="row mt-5 mb-5">
                    <div className=" offset-10 col-2">
                        <label for="amount">  Total Amount</label>
                        <input value={totalAmount} readOnly className="form-control bg-secondary text-white text-center" />
                        <label for="amount">  Discount</label>
                        <input value={totalDiscount} readOnly className="form-control  bg-secondary text-white text-center" />
                        <label for="amount">  Net Amount </label>
                        <input value={netAmount} readOnly className="form-control  bg-secondary text-white text-center" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Services_list
