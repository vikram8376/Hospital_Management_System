import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Patient = () => {
  const [data, setdata] = useState([]);
  const [startDate, setStartDate] = useState(''); // Start date for filtering
  const [endDate, setEndDate] = useState('');
  const [name, setName] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    getemployee();
  }, []);

  const getemployee = async () => {
    const response = await axios.get('http://localhost:5000/OPD_list')
    if (response.status === 200) {
      setdata(response.data)
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/OPD_list/${id}`);

      if (response.status === 200) {
        setdata((prevData) => prevData.filter((item) => item.id !== id));
        alert(' Are you sure Data is Deleting...');

      }
    } catch (error) {
      console.error('Error Deleting data:', error);
    }

  }

  const filteredData = data.filter((item) => {
    // Date filter logic
    if (!startDate || !endDate) {
      return true; // If no date range is selected, show all data
    }
    const doj = new Date(item.DOJ);
    if (doj < new Date(startDate) || doj > new Date(endDate)) {
      return false; // Exclude items outside the date range
    }

    // Name and lastname filter logic
    if (name && item.Name.toLowerCase().indexOf(name.toLowerCase()) === -1) {
      return false; // Exclude items with names that don't match the filter
    }

    return true;
  });

  const calculatedTotalAmount = filteredData.reduce((total, item) => {
    return total + parseFloat(item.Amount || 0);
  }, 0);

  useEffect(() => {
    setTotalAmount(calculatedTotalAmount);
  }, [calculatedTotalAmount]);



  const navigate = useNavigate();



  const handleEdit = (id) => {
    navigate(`/OPD_list/${id}`);
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



      <div className="container-fluid mt-3 border formfilter p-5 ">
        <div className="row mt-3">
          <div className="col-md-3">
            <label htmlFor="name">Name</label>
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
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Doct.</th>
              <th scope="col">Service</th>
              <th scope="col">DOJ</th>
              <th scope="col">Vaild</th>
              <th scope="col">BP</th>
              <th scope="col">Weight</th>
              <th scope="col">Temp.</th>
              <th scope="col">Amt.</th>
              <th scope="col"> Action</th>
            </tr>
          </thead>
          <tbody>

            {
              filteredData.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.Name}</td>
                    <td>{item.Phone_No}</td>
                    <td>{item.Address}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Doctor}</td>
                    <td>{item.Service}</td>
                    <td>{item.DOJ}</td>
                    <td>{item.Valid}</td>
                    <td className='text-center'>{item.BP}</td>
                    <td className='text-center'>{item.Weight}</td>
                    <td className='text-center'>{item.Temp}</td>
                    <td className='text-center'>{item.Amount}</td>
                    <td>
                      <div>

                        <button type="button" className="btn btn-outline-primary " onClick={() => handleEdit(item.id)} >Edit</button>

                        <button type="button" className="btn btn-outline-danger buttonmargn" onClick={() => handleDelete(item.id)}>Delete</button>
                      </div>
                    </td>

                  </tr>
                )
              })};
          </tbody>
        </table>

        <div className="row mt-5 mb-5">
          <div className=" offset-9 col-3">
            <label for="amount">  Total Amount</label>
            <input value={totalAmount.toFixed(2)} readOnly className="form-control  bg-secondary text-white text-center" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Patient;
