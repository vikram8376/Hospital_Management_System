import React from 'react';
import './Employee.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const Employee = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {
    getemployee();
  }, []);

  const getemployee = async () => {
    const response = await axios.get('http://localhost:5000/employee')
    if (response.status === 200) {
      setdata(response.data)
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/employee/${id}`);

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
    navigate(`/employee/${id}`);
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



      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-4">
            <Link to='/addemployee' >
              <button type="button" style={{ marginLeft: '1200px' }} className="btn btn-success" ><a className="text-white text-decoration-none" href="">ADD Employee</a></button>
            </Link>

          </div>
        </div>
        <table className="table table-striped table-hover mt-4 bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">Name </th>
              <th scope="col">Lastname</th>
              <th scope="col">Mob No.</th>
              <th scope="col">Alt No.</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">DOB</th>
              <th scope="col">DOJ</th>
              <th scope="col">Password</th>
              <th scope="col" >Department</th>
              <th scope="col"> Action</th>
            </tr>
          </thead>
          <tbody>

            {data &&
              data.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.Name}</td>
                    <td>{item.Lastname}</td>
                    <td>{item.Mobile_No}</td>
                    <td>{item.Alt_No}</td>
                    <td>{item.Email}</td>
                    <td>{item.Gender}</td>
                    <td>{item.DOB}</td>
                    <td>{item.DOJ}</td>
                    <td>{item.Password}</td>
                    <td className='text-center'>{item.Department}</td>
                    <td>
                      <div>

                        <button type="button" className="btn btn-outline-primary " onClick={() => handleEdit(item.id)}>Edit</button>

                        <button type="button" className="btn btn-outline-danger buttonmargn" onClick={() => handleDelete(item.id)}>Delete</button>
                      </div>
                    </td>

                  </tr>
                )
              })};
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Employee;
