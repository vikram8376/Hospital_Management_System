const express = require('express');
const mysql = require('mysql');
const cors = require("cors");



const app = express();

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'vikram7376',
    database : 'hospital_services'
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

db.on('error', (err) => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('Connection lost. Reconnecting...');
        db.connect(); // Reconnect to the database
    } else {
        console.error('Database error:', err);
    }
});



app.post('/employee_list', (req, res) => {
    const sql = "INSERT INTO  employee_list( Name,  Lastname, Mobile_No,  Alt_No, Email, Gender,  DOB, DOJ, Password, Department) VALUES ( ?, ?, ?, ?, ?, ?, ? ,? ,?, ?)";

    const values =[
                   req.body.Name,
                   req.body.Lastname,
                   req.body.Mobile_No,
                   req.body.Alt_No,
                   req.body.Email,
                   req.body.Gender,
                   req.body.DOB,
                   req.body.DOJ,
                   req.body.Password,
                   req.body.Department
                ]

    db.query(sql, values, (err, data) => {
        if (err){
            return res.status(500).send('Error: ' + err);
        }
        return res.json('Data inserted successfully');
    });
});



app.get('/employee', (req, res) => {
    const sql = "SELECT id, Name, Lastname, Mobile_No, Alt_No, Email, Gender, DATE(DOB) AS DOB, DATE(DOJ) AS DOJ, Password, Department FROM employee_list";
    ;
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }
        const formattedResults = results.map((row) => {
            return {
                ...row,
                DOB: row.DOB.toISOString().split('T')[0], // Display only the date portion
                DOJ: row.DOJ.toISOString().split('T')[0], // Display only the date portion
            };
        });

        return res.json(formattedResults);
        
    });
});


app.delete('/employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM employee_list WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }

        if (results.length === 0) {
            return res.status(404).send('Engineer not found');
        }

        return res.json(results[0]);
    });
});


app.get('/employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee_list WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }

        if (results.length === 0) {
            return res.status(404).send('Engineer not found');
        }

        return res.json(results[0]);
    });
});


app.put('/employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE employee_list SET Name=?, Lastname=?, Mobile_No=?, Alt_No=?, Email=?, Gender=?, DOB=?, DOJ=?, Password=?, Department=? WHERE id=?";

    const values = [
        req.body.Name,
        req.body.Lastname,
        req.body.Mobile_No,
        req.body.Alt_No,
        req.body.Email,
        req.body.Gender,
        req.body.DOB,
        req.body.DOJ,
        req.body.Password,
        req.body.Department,
        id
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }
        return res.json('Data updated successfully');
    });
});




























// Create a new Table of OPDList ................



app.post('/appoinments', (req, res) => {
    const sql = "INSERT INTO  appoinments( Name, Phone_No, Address, Gender, Doctor, Service, DOJ, Valid, BP ,Weight, Temp, Amount) VALUES ( ?, ?, ?, ?, ?, ?, ? ,? ,?, ?, ?, ?)";

    const values =[
                   req.body.Name,
                   req.body.Phone_No,
                   req.body.Address,
                   req.body.Gender,
                   req.body.Doctor,
                   req.body.Service,
                   req.body.DOJ,
                   req.body.Valid,
                   req.body.BP,
                   req.body.Weight,
                   req.body.Temp,
                   req.body.Amount,

                ]

    db.query(sql, values, (err, data) => {
        if (err){
            return res.status(500).send('Error: ' + err);
        }
        return res.json('Data inserted successfully');
    });
});



app.get('/OPD_list', (req, res) => {
    const sql = "SELECT id, Name, Phone_No, Address , Gender, Doctor, Service, DATE(DOJ) AS DOJ, Valid, BP ,Weight, Temp, Amount FROM appoinments";
    ;
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }
        const formattedResults = results.map((row) => {
            return {
                ...row, // Display only the date portion
                DOJ: row.DOJ.toISOString().split('T')[0],
                Valid: row.Valid.toISOString().split('T')[0], // Display only the date portion
            };
        });

        return res.json(formattedResults);
        
    });
});



app.delete('/OPD_list/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM appoinments WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }

        if (results.length === 0) {
            return res.status(404).send('Engineer not found');
        }

        return res.json(results[0]);
    });
});


app.get('/OPD_list/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM appoinments WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }

        if (results.length === 0) {
            return res.status(404).send('Engineer not found');
        }

        return res.json(results[0]);
    });
});



app.put('/OPD_list/:id', (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE appoinments SET Name=?, Phone_No=?, Address=?, Gender=?, Doctor=?, Service=?, DOJ=?, Valid=?, BP=? ,Weight=?, Temp=?, Amount=? WHERE id=?";

    const values = [
        req.body.Name,
        req.body.Phone_No,
        req.body.Address,
        req.body.Gender,
        req.body.Doctor,
        req.body.Service,
        req.body.DOJ,
        req.body.Valid,
        req.body.BP,
        req.body.Weight,
        req.body.Temp,
        req.body.Amount,
        id
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }
        return res.json('Data updated successfully');
    });
});


app.get('/OPD_list', (req, res) => {
    const { start_date, end_date } = req.query;

    console.log("Received start_date:", start_date);
    console.log("Received end_date:", end_date);
    
    const sql = `SELECT *
                 FROM appoinments
                 WHERE DOJ BETWEEN ? AND ?`;
  
    const values = [start_date, end_date];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        return res.status(500).send('Error: ' + err);
      }
      return res.json(data);
    });
  });






  // Hospital_details API




app.get('/hospital_detail', (req, res) => {
    const sql = "SELECT id , Name, Registration_No, Address_1 , Address_2, City, State, Pincode, PHone_No, Email_id , Web_site FROM hospital_detail";
    ;
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }

        return res.json(results);
        
    });
});


app.get('/hospital_detail/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM hospital_detail WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }

        if (results.length === 0) {
            return res.status(404).send('Engineer not found');
        }

        return res.json(results[0]);
    });
});



app.put('/hospital_detail/:id', (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE hospital_detail SET Name=?, Registration_No=?, Address_1=?, Address_2=?, City=?, State=?, Pincode=?, PHone_No=?, Email_id=?, Web_site=? WHERE id = ?";

    const values = [
        req.body.Name,
        req.body.Registration_No,
        req.body.Address_1,
        req.body.Address_2,
        req.body.City,
        req.body.State,
        req.body.Pincode,
        req.body.PHone_No,
        req.body.Email_id,
        req.body.Web_site,
        id
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error updating data:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json('Data updated successfully');
    });
});










// Services Table ................

app.post('/Service', (req, res) => {
    const sql = "INSERT INTO  Service( Name,  Amount, Services,  valid, Discount , Doctor) VALUES ( ?, ?, ?, ?, ?, ?)";

    const values =[
                   req.body.Name,
                   req.body.Amount,
                   req.body.Services,
                   req.body.valid,
                   req.body.Discount,
                   req.body.Doctor,
                ]

    db.query(sql, values, (err, data) => {
        if (err){
            return res.status(500).send('Error: ' + err);
        }
        return res.json('Data inserted successfully');
    });
});



app.get('/Service_list', (req, res) => {
    const sql = "SELECT id, Name, Amount, Services, DATE(valid) AS valid, Discount, Doctor FROM Service";
    ;
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }

        const formattedResults = results.map((row) => {
            return {
                ...row,
                valid: row.valid.toISOString().split('T')[0], // Display only the date portion
            };
        });

        return res.json(formattedResults);
        
    });
});


app.delete('/Service_list/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM Service WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }

        if (results.length === 0) {
            return res.status(404).send('Engineer not found');
        }

        return res.json(results[0]);
    });
});



app.get('/Service_list/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM Service WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }

        if (results.length === 0) {
            return res.status(404).send('Engineer not found');
        }

        return res.json(results[0]);
    });
});



app.put('/Service_list/:id', (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE Service SET Name=?, Amount=?, Services=?, valid=?, Discount=?, Doctor=? WHERE id=?";

    const values = [
        req.body.Name,
        req.body.Amount,
        req.body.Services,
        req.body.valid,
        req.body.Discount,
        req.body.Doctor,
        id
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }
        return res.json('Data updated successfully');
    });
});





  


app.listen(5000, () => {
    console.log('Listening on port 5000.............');
});