var express = require('express');
var path = require('path');
var cors = require('cors');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var random = require('random');

var crypto = require('crypto');


process.env.SECRET_KEY = 'illneverbearobdeniroformejoepesciisfine';
const port = process.env.PORT || 3000; 

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
var sess = {
    secret: 'illneverbearobdeniroformejoepesciisfine', 
    resave: true,
    saveUninitialized: true,
    cookie : { maxAge : 86400 * 1000 }
}

app.use(session(sess));

var connection = mysql.createConnection({
    host: 'ec2-18-224-138-138.us-east-2.compute.amazonaws.com',
    port: '3306',
    user: 'housing404',
    password: 'housingpass',
    database: 'room404'
});



connection.connect(function(err) {
    if (err) {
        console.log("error connecting");
        return;
    } else {
        console.log("Connected");
    }
});

app.listen(port, () => {
    console.log('Simple Example');
});



//Login function
app.post('/users/login', (req, res) => {
    //take u and p from front
    let user_email_temp = req.body.email;
    //let user_password = req.body.password;
    let hashedPW = crypto.createHash('SHA256').update(req.body.password).digest("hex");
    if (req.session.loggedin) {
        //checks if already logged in
        res.status(200).send('You are logged in as ' + req.session.user_name);
    } else {
        //did user actually input both
        if (user_email_temp && hashedPW) {
            //the ? fills in parameter
            connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [user_email_temp, hashedPW], function(err, results, fields) {
                if (results.length === 1) {
                    req.session.user_id = results[0].id;
                    console.log("Login Successful!");
                    req.session.email = req.body.email;
                    req.session.loggedin = true;
                    res.status(200).send('Login Success!');
                } else {
                    req.status(400).send('Incorrect Username and/or Password!');
                    req.session.loggedin = false;
                }
                res.end();
            });
        } else {
            res.status(400).send('Please enter Username and Password!');
            res.end();
        }
    }
});

//logout function
app.get('/users/logout', function (req, res) {
    if (req.session.loggedin) {
        req.session.destroy();
        res.send('Logout Successful!');
    } else {
        res.send("<h1> You are not logged in. Can't log out!</h11>");
    }
});

//create user
app.post('/users/register', (req, res) => {
    connection.query('SELECT id FROM users ORDER BY DESC LIMIT 1', function(err, results, fields) {
        if (err) throw err;
        else {
            var tempId = results[0].id;
        }
    });
    let hashed = crypto.createHash('SHA256').update(req.body.password).digest("hex");
    const userData = [tempId,
                    req.body.name,
                    req.body.email,
                    hashed]
 
    connection.query('INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)',
                    userData, function(err, result) {
                  if (err) throw err
                  else{
                    console.log("user ", req.body.name, "created")
                  }
                });
});



//delete user
//change user data
//get user data
app.get('/user/profile', (req, res) => {
    if(!req.session.loggedin) {
        res.status(404).send("You must be logged in to view this");
    } else {
        console.log("User ", req.session.user_id, " is checking profile"); //console log to check
        connection.query('SELECT * FROM users NATURAL JOIN uProfiles WHERE id = ?', [req.session.user_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        }); //possibly limit what is selected
    }
});



//get aparments
app.get('/apartments', (req, res) => {
    if(!req.session.loggedin) {
        res.status(404).send("You must be logged in to view this");
    } else {
        console.log("User ", req.session.user_id, " is checking apartments"); //console log to check
        connection.query('SELECT * FROM aProfiles', function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        }); //possibly limit what is selected
    }
});

//post apartment
//delete apartment
//get events
app.get('/events', (req, res) => {
    if(!req.session.loggedin) {
        res.status(404).send("You must be logged in to view this");
    } else {
        console.log("User ", req.session.user_id, " is checking events"); //console log to check
        connection.query('SELECT * FROM events', function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        }); //possibly limit what is selected
    }
});
//post event
//delete event
//get notifications
app.get('/user/notifications', (req, res) => {
    if(!req.session.loggedin) {
        res.status(404).send("You must be logged in to view this");
    } else {
        console.log("User ", req.session.user_id, " is checking notifications"); //console log to check
        connection.query('SELECT * FROM users NATURAL JOIN notifications ON users.id = notifications.to_u_id WHERE id = ?', [req.session.user_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        }); //possibly limit what is selected
    }
});
//post notifications
//delete notifications?
//get attending
app.get('/events/attending', (req, res) => {
    if(!req.session.loggedin) {
        res.status(404).send("You must be logged in to view this");
    } else {
        console.log("User ", req.session.user_id, " is checking event attendance"); //console log to check
        connection.query('SELECT * FROM attending WHERE e_id = ?', [req.body.e_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        }); //possibly limit what is selected
    }
});
//post attending
//delete attending?


//how to do filters? tf?







/*

//examples below
app.get('/url/blah', (req, res) => {
    if (!req.session.loggedin) {
        res.status(404).send("error message");
    } else {
        console.log("user id " + req.session.user_id);
        connection.query('SELECT * FROM users JOIN tblename ON users.user_id = table.id  WHERE users.user_id = ?', [req.session.user_id], function(error, results, fields) {
            let responseToFront = {}
            for (var i = 0; i < results.length; i++) {
                responseToFront[results[i].namething] = results[i].thing;
            }
            res.status(200).send(responseToFront);
        });
    }
});

//get stuff
app.get('/users/blah', (req, res) => {
    if (!req.session.loggedin) {
        res.status(404).send("You are not authorized here");
    } else {
        var thingsToPrint = {};
        connection.query('SELECT * FROM blah JOIN atable ON thing', function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
    }
});

//post as a delete
app.post('/blah/user/delete', (req, res) => {
    if (!req.session.loggedin) {
        res.status(404).send('You are not authorized in here');
    } else {
        let variablething = req.body.variablething;
        console.log('User id is ' + req.session.user_id);
        connection.query('DELETE FROM users WHERE user_id = ?', [req.session.user_id], function(err, results, fields) {
            res.status(200).send("Delete successful");
        });
    }
});


app.post('/blah/url/add', (req, res) => {
    if (!req.session.loggedin) {
        res.status(404).send("You are not authorized here");
    } else {
        //checking if exists and if so uses that
        var a_id = -1; //so check if id exits?
        connection.query('SELECT a_id FROM aProfiles WHERE a_id = ?', [req.body.a_id], function(err, results, fields) { //dont use id to check, find something else
            if (err) throw err;
            else {
                //processing
                //thing = results[0].thing
                //if (results.length > 0) { a_id = results[0].a_id; }
            }
        });

        if (a_id != -1) {
            user_add_things = [req.session.user_id, a_id, req.body.blah]; //where blah would be all the parameters
            console.log("user id ", req.session.user_id, "add apt");
            connection.query('INSERT INTO aProfiles (user_id, a_id, etc) VALUES (?, ?, ?, ?)', user_add_things, function(err, results, fields) {
                res.status(200).send('Add success');
            });
        } else {
            connection.query('INSERT INTO aProfiles (a_id) VALUES ?',  [req.body.a_id], function(err, results, fields) {
                if (err) throw err;
            });

            connection.query('SELECT a_id FROM aProfiles ORDER BY a_id DESC LIMIT 1', function(err, results, fields) {
                if (err) throw err
                else {
                    if (results > 0) { a_id = results[0].a_id }
                }
            });

            user_add_things = [req.session.user_id, a_id, req.body.things];
            console.log("User id is ", req.session.user_id, " adds apartment");
            connection.query('INSERT INTO aProfiles (list things) VALUES (?)', user_add_things, function(err, result, fields) {
                res.status(200).send('Add success');
            });
        }

    }
});
*/