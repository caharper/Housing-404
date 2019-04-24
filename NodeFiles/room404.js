//include dependencies
var express = require('express');
var path = require('path');
var cors = require('cors');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var crypto = require('crypto');

//create key and initialize port
process.env.SECRET_KEY = 'illneverbearobdeniroformejoepesciisfine';
const port = process.env.PORT || 3000; 

//use parsers, cors, and create session
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

//use session
app.use(session(sess));

//connect to the sql database
var connection = mysql.createConnection({
    host: 'housing404.csegpu8i3kxk.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'housing404',
    password: 'housingpass',
    database: 'room404'
});

//connect to the database
connection.connect(function(err) {
    if (err) {
        console.log("error connecting" + err);
        return;
    } else {
        console.log("Connected");
    }
});

//have server listen on the port
app.listen(port, () => {
    console.log('Sever Listening');
});


//Login function
app.post('/users/login', (req, res) => {
    //Get email and hash password
    var user_email_temp = req.body.email;
    var hashedPW = crypto.createHash('SHA256').update(req.body.password).digest("hex");
    if (req.session.loggedin) { //check if already logged in
        res.status(200).send('You are logged in as ' + req.session.user_name);
    } else {
        //make sure email and pw both have values
        if (user_email_temp && hashedPW) {
            //check if correct user
            connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [user_email_temp, hashedPW], function(err, results, fields) {
                if (results.length === 1) { //if log in successful
                    req.session.user_id = results[0].id;
                    console.log("Login Successful!");
                    req.session.email = req.body.email;
                    req.session.loggedin = true;
                    res.status(200).send('Login Success!');
                } else { //if log in unsuccessful
                    req.status(400).send('Incorrect Username and/or Password!');
                    req.session.loggedin = false;
                }
                res.end();
            });
        } else { //if both not entered send error
            res.status(400).send('Please enter Username and Password!');
            res.end();
        }
    }
});

//logout function
app.get('/users/logout', function (req, res) {
    if (req.session.loggedin) { //stop session
        req.session.destroy();
        res.send('Logout Successful!');
    } else { //if not logged in send error
        res.send("<h1> You are not logged in. Can't log out!</h11>");
    }
});

//create user
app.post('/users/register', (req, res) => {
    //get id and increment
    var tempId = 0;
    connection.query('SELECT id FROM users ORDER BY DESC LIMIT 1', function(err, results, fields) {
        if (err) throw err;
        else {
            tempId = results[0].id + 1;
        }
    });
    //hash the password to store
    var hashed = crypto.createHash('SHA256').update(req.body.password).digest("hex");
    const userData = [tempId, 
        req.body.name, 
        req.body.email, 
        hashed]
 
    //create user
    connection.query('INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)', userData, function(err, result) {
        if (err) throw err
        else{
            res.status(200).send('Successfully registered');
        }
    });
});





/*
 * The following section contains get requests for various data
 */

//view your profile
app.get('/user/profile', (req, res) => {
   // if(!req.session.loggedin) {
   //     res.status(404).send("You must be logged in to view this");
   // } else {
        connection.query('SELECT * FROM users NATURAL JOIN uProfiles ON users.id = uProfiles.id WHERE id = ?', [req.session.user_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
   // }
});

//view list profiles
app.get('/users', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be logged in to view this");
	//} else {
		connection.query('SELECT * FROM uProfiles', function(err, results, fields) {
			if (err) throw err;
			else {
				res.status(200).send(results);
			}
		});
	//}
});

//view specific profile
app.get('/users/:uid?', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be logged in to see this");
	//} else {
		var uid = req.params.uid;
		connection.query('SELECT * FROM uProfiles WHERE id = ?', [uid], function(err, results, fields) {
			if (err) throw err;
			else {
				res.status(200).send(results);
			}
		});
	//}
});

//view list of those events you are attending
app.get('/user/attending/events', (req, res) => {
    // if(!req.session.loggedin) {
    //     res.status(404).send("You must be logged in to view this");
    // } else {
        connection.query('SELECT * FROM attending WHERE u_id = ?', [req.session.user_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
     //}
});

//view notifications
app.get('/user/notifications', (req, res) => {
   // if(!req.session.loggedin) {
   //     res.status(404).send("You must be logged in to view this");
   // } else {
        connection.query('SELECT * FROM notifications JOIN users ON notifications.to_u_id = users.id AND notifications.from_u_id = users.id WHERE notification.to_u_id = ?', [req.session.user_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
    //}
});

//view your apartment listings
app.get('/user/listing', (req, res) => {
    // if(!req.session.loggedin) {
    //     res.status(404).send("You must be logged in to view this");
    // } else {
        connection.query('SELECT * FROM users JOIN aProfiles ON users.id = aProfiles.u_id WHERE id = ?', [req.session.user_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
    //}
});

//view all apartment listings
app.get('/apartments', (req, res) => {
   // if(!req.session.loggedin) {
   //     res.status(404).send("You must be logged in to view this");
   // } else {
        connection.query('SELECT * FROM aProfiles', function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
   // }
});

//view specific apartment listings
app.get('/apartments/:aId?', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be logged in to view this");
	//} else {
		var aid = req.params.aId;
		connection.query('SELECT * FROM aProfiles WHERE a_id = ?', [aid], function(err, results, fields) {
			if (err) throw err;
			else {
				res.status(200).send(results);
			}
		});
	//}
});

//view previous rents for an apartment listing
app.get('/apartments/pastRents/:aId?', (req, res) => {
    // if(!req.session.loggedin) {
    //     res.status(404).send("You must be logged in to view this");
    // } else {
        var aid = req.params.aId;
        connection.query('SELECT rent FROM aProfiles JOIN prevRents ON aProfiles.a_id = prevRents.a_id WHERE aProfiles.a_id = ? ', [aid], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
    //}
});

//view your event
app.get('/user/profile/event', (req, res) => { 
    // if(!req.session.loggedin) {
    //     res.status(404).send("You must be logged in to view this");
    // } else {
        connection.query('SELECT * FROM users NATURAL JOIN events ON users.id = events.owner WHERE id = ?', [req.session.user_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        }); //possibly limit what is selected
    // }
});

//view all events
app.get('/events', (req, res) => {
   // if(!req.session.loggedin) {
   //     res.status(404).send("You must be logged in to view this");
   // } else {
        connection.query('SELECT * FROM events', function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
   // }
});


//view specific event

app.get('/events/:eid?', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be loggined in to view this");
	//} else {
		var eid = req.params.eid;
		console.log("User ", req.session.user_id, " is checking an event");
		connection.query('SELECT * FROM events WHERE e_id = ?', [eid], function(err, results, fields){
			if (err) throw err;
			else {
				res.status(200).send(results);
			}
		});
	//}
});


//view attending for specific event
//get attending
app.get('/events/:eid?/attending', (req, res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
	    var eid = req.params.eid;
        console.log("User ", req.session.user_id, " is checking event attendance"); //console log to check
        connection.query('SELECT * FROM attending WHERE e_id = ?', [eid], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
    //}
});





/*
 * The following section contains post requests for various data that
 * filters the results shown on listing pages.
 */

//apartments
app.post('/apartments/results', (req, res) => {
    //if (!req.session.loggedin) {
    //  res.status(404).send("You must be logged in to view this");
    //} else {
        const filters = [req.body.rent, // less than    0
            req.body.leaseTime, //equal 1
            req.body.occupants, //less than 2
            req.body.beds, //equal  3      
            req.body.baths, //equal 4
            req.body.squareFeet, //equal    5
            req.body.rooms, //equal 6
            req.body.kitchen, //equal   7
            req.body.floor, //equal 8
            req.body.pets, //equal  9
            req.body.poBox, //equal 10
            req.body.studyRooms, //equal    11
            req.body.gym, //equal   12
            req.body.pool, //equal  13
            req.body.ac, //equal    14
            req.body.heat //equal   15
        ];
        var first = false;
        var q = 'SELECT * FROM aProfiles WHERE ';
        if (filters[0] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'rent < ' + filters[0];
            } else {
                q = q + ' AND rent < ' + filters[0];
            }
        }
        if (filters[1] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'leaseTime = ' + filters[1];
            } else {
                q = q + ' AND leaseTime = ' + filters[1];
            }
        }
        if (filters[2] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'occupants < ' + filters[2];
            } else {
                q = q + ' AND occupants < ' + filters[2];
            }
        }
        if (filters[3] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'beds = ' + filters[3];
            } else {
                q = q + ' AND beds = ' + filters[3];
            }
        }
        if (filters[4] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'baths = ' + filters[4];
            } else {
                q = q + ' AND baths = ' + filters[4];
            }
        }
        if (filters[5] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'squareFeet = ' + filters[5];
            } else {
                q = q + ' AND squareFeet = ' + filters[5];
            }
        }
        if (filters[6] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'rooms = ' + filters[6];
            } else {
                q = q + ' AND rooms = ' + filters[6];
            }
        }
        if (filters[7] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'rent kitchen = ' + filters[7];
            } else {
                q = q + ' AND kitchen = ' + filters[7];
            }
        }
        if (filters[8] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'floor = ' + filters[8];
            } else {
                q = q + ' AND floor = ' + filters[8];
            }
        }
        if (filters[9] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'pets = ' + filters[9];
            } else {
                q = q + ' AND pets = ' + filters[9];
            }
        }
        if (filters[10] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'poBox = ' + filters[10];
            } else {
                q = q + ' AND poBox = ' + filters[10];
            }
        }
        if (filters[11] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'studyRooms = ' + filters[11];
            } else {
                q = q + ' AND studyRooms = ' + filters[11];
            }
        }
        if (filters[12] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'gym = ' + filters[12];
            } else {
                q = q + ' AND gym = ' + filters[12];
            }
        }
        if (filters[13] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'pool = ' + filters[13];
            } else {
                q = q + ' AND pool = ' + filters[13];
            }
        }
        if (filters[14] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'ac = ' + filters[14];
            } else {
                q = q + ' AND ac = ' + filters[14];
            }
        }
        if (filters[15] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'heat = ' + filters[15];
            } else {
                q = q + ' AND heat = ' + filters[15];
            }
        }

        connection.query(q, function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
    //}
});

//users
app.post('/users/results', (req, res) => {
    //if (!req.session.loggedin) {
    //  res.status(404).send("You must be logged in to view this");
    //} else {
        const filters = [req.body.gender, //0
            req.body.smoker, //1
            req.body.genderP, //2
            req.body.smokerP, //3
            req.body.year, //4
            req.body.tidynessP, //5
            req.body.yearP, //6
            req.body.tempP, //7
            req.body.bedTimeP, //8
            req.body.wakeTime, //9
            req.body.wakeTimeP, //10
            req.body.pets //11
        ];
        var first = false;
        var q = 'SELECT * FROM uProfiles WHERE ';
        if (filters[0] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'gender = ' + filters[0];
            } else {
                q = q + ' AND gender = ' + filters[0];
            }
        }
        if (filters[1] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'smoker = ' + filters[1];
            } else {
                q = q + ' AND smoker = ' + filters[1];
            }
        }
        if (filters[2] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'genderP = ' + filters[2];
            } else {
                q = q + ' AND genderP = ' + filters[2];
            }
        }
        if (filters[3] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'smokerP = ' + filters[3];
            } else {
                q = q + ' AND smokerP = ' + filters[3];
            }
        }
        if (filters[4] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'year = ' + filters[4];
            } else {
                q = q + ' AND year = ' + filters[4];
            }
        }
        if (filters[5] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'tidynessP = ' + filters[5];
            } else {
                q = q + ' AND tidynessP = ' + filters[5];
            }
        }
        if (filters[6] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'yearP = ' + filters[6];
            } else {
                q = q + ' AND yearP = ' + filters[6];
            }
        }
        if (filters[7] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'tempP = ' + filters[7];
            } else {
                q = q + ' AND tempP = ' + filters[7];
            }
        }
        if (filters[8] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'bedTimeP = ' + filters[8];
            } else {
                q = q + ' AND bedTimeP = ' + filters[8];
            }
        }
        if (filters[9] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'wakeTime = ' + filters[9];
            } else {
                q = q + ' AND wakeTime = ' + filters[9];
            }
        }
        if (filters[10] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'wakeTimeP = ' + filters[10];
            } else {
                q = q + ' AND wakeTimeP = ' + filters[10];
            }
        }
        if (filters[11] !== null) {
            if (first !== true) {
                first = true;
                q = q + 'pets = ' + filters[11];
            } else {
                q = q + ' AND pets = ' + filters[11];
            }
        }

        connection.query(q, function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
    //}
});

//events
app.post('/events/results', (req, res) => {
    //if (!req.session.loggedin) {
    //  res.status(404).send("You must be logged in to view this");
    //} else {
        connection.query('SELECT * FROM events WHERE date = ?', [req.body.date], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
    //}
});





/* 
 * The following section contains post and put requests for various data
 */ 

//update password

//edit profile
app.post('/user/profile/edit', (req, res) => {
    //if (!req.session.loggedin) {
    //  res.status(404).send("You must be logged in to edit this");
    //} else {
        connection.query('SELECT u_id FROM uProfiles WHERE id = ?', [req.body.u_id], function(err, results, fields) {
            if (err) throw err;
            else if (results[0].u_id === req.session.id) {
                var q = 'UPDATE uProfiles SET ';
                var first = false;

                if (req.body.gender !== null) {
                    if (first === false) {
                        q = q + 'gender = ' + req.body.gender;
                        first = true;
                    } else {
                        q = q + ' AND gender = ' + req.body.gender;
                    }
                }
                if (req.body.picture !== null) {
                    if (first === false) {
                        q = q + 'picture = ' + req.body.picture;
                        first = true;
                    } else {
                        q = q + ' AND picture = ' + req.body.picture;
                    }
                }
                if (req.body.smoker !== null) {
                    if (first === false) {
                        q = q + 'smoker = ' + req.body.smoker;
                        first = true;
                    } else {
                        q = q + ' AND smoker = ' + req.body.smoker;
                    }
                }
                if (req.body.genderP !== null) {
                    if (first === false) {
                        q = q + 'genderP = ' + req.body.genderP;
                        first = true;
                    } else {
                        q = q + ' AND genderP = ' + req.body.genderP;
                    }
                }
                if (req.body.smokerP !== null) {
                    if (first === false) {
                        q = q + 'smokerP = ' + req.body.smokerP;
                        first = true;
                    } else {
                        q = q + ' AND smokerP = ' + req.body.smokerP;
                    }
                }
                if (req.body.year !== null) {
                    if (first === false) {
                        q = q + 'year = ' + req.body.year;
                        first = true;
                    } else {
                        q = q + ' AND year = ' + req.body.year;
                    }
                }
                if (req.body.tidynessP !== null) {
                    if (first === false) {
                        q = q + 'tidynessP = ' + req.body.tidynessP;
                        first = true;
                    } else {
                        q = q + ' AND tidynessP = ' + req.body.tidynessP;
                    }
                }
                if (req.body.yearP !== null) {
                    if (first === false) {
                        q = q + 'yearP = ' + req.body.yearP;
                        first = true;
                    } else {
                        q = q + ' AND yearP = ' + req.body.yearP;
                    }
                }
                if (req.body.tempP !== null) {
                    if (first === false) {
                        q = q + 'tempP = ' + req.body.tempP;
                        first = true;
                    } else {
                        q = q + ' AND tempP = ' + req.body.tempP;
                    }
                }
                if (req.body.bedTimeP !== null) {
                    if (first === false) {
                        q = q + 'bedTimeP = ' + req.body.bedTimeP;
                        first = true;
                    } else {
                        q = q + ' AND bedTimeP = ' + req.body.bedTimeP;
                    }
                }
                if (req.body.gender !== null) {
                    if (first === false) {
                        q = q + 'wakeTime = ' + req.body.wakeTime;
                        first = true;
                    } else {
                        q = q + ' AND wakeTime = ' + req.body.wakeTime;
                    }
                }
                if (req.body.wakeTimeP !== null) {
                    if (first === false) {
                        q = q + 'wakeTimeP = ' + req.body.wakeTimeP;
                        first = true;
                    } else {
                        q = q + ' AND wakeTimeP = ' + req.body.wakeTimeP;
                    }
                }
                if (req.body.pets !== null) {
                    if (first === false) {
                        q = q + 'pets = ' + req.body.pets;
                        first = true;
                    } else {
                        q = q + ' AND pets = ' + req.body.pets;
                    }
                }

                q = q + ' WHERE id = ' + req.session.id;
                connection.query(q, function(err, results, fields) {
                    if (err) throw err;
                    else {
                        res.status(200).send("Successfully updated user profile");
                    }
                });
            } else {
                res.status(404).send("You are not authorized to edit this");
            }
        });
    //}
});

//create listing
app.post('/user/apartments', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be loggined in to add this");
	//} else {
	    connection.query('SELECT a_id FROM aProfiles ORDER BY DESC LIMIT 1', function(err, results, fields) {
		    if (err) throw err;
			else {
				var a_id = results[0].a_id + 1;
        		connection.query('insert into aProfiles values(? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?)'[a_id, req.session.id, req.body.location,
        		    req.body.rent, req.body.leaseTime, req.body.description, req.body.picture, req.body.picture, req.body.occupants, req.body.beds,
        			req.body.baths, req.body.squareFeet, req.body.rooms, req.body.kitchen, req.body.laundry, req.body.floor, req.body.pets, 
        			req.body.poBox, req.body.studyRooms, req.body.roomStyle, req.body.gym, req.body.pool, req.body.ac, req.body.pool], function(err, results, fields){
                    
                    if (err) throw err;
					else {
					    res.status(200).send("Successfully added event");
                    }
                    
				});
			}
		});
	//}
});

//edit apt listing
app.post('/user/apartments/edit', (req, res) => {
    //if (!req.session.loggedin) {
    //  res.status(404).send("You must be logged in to edit this");
    //} else {
        connection.query('SELECT * FROM aProfiles WHERE a_id = ?', [req.body.a_id], function(err, results, fields) {
            if (err) throw err;
            else if (results[0].u_id === req.session.id) {
                var q = 'UPDATE aProfiles SET ';
                var first = false;

                if (req.body.location !== null) {
                    if (first === false) {
                        q = q + 'location = ' + req.body.location;
                        first = true;
                    } else {
                        q = q + ' AND location = ' + req.body.location;
                    }
                }
                if (req.body.type !== null) {
                    if (first === false) {
                        q = q + 'type = ' + req.body.type;
                        first = true;
                    } else {
                        q = q + ' AND type = ' + req.body.type;
                    }
                }
                if (req.body.rent !== null) {
                    if (first === false) {
                        q = q + 'rent = ' + req.body.rent;
                        first = true;
                    } else {
                        q = q + ' AND rent = ' + req.body.rent;
                    }
                }
                if (req.body.leaseTime !== null) {
                    if (first === false) {
                        q = q + 'leaseTime = ' + req.body.leaseTime;
                        first = true;
                    } else {
                        q = q + ' AND leaseTime = ' + req.body.leaseTime;
                    }
                }
                if (req.body.description !== null) {
                    if (first === false) {
                        q = q + 'description = ' + req.body.description;
                        first = true;
                    } else {
                        q = q + ' AND description = ' + req.body.description;
                    }
                }
                if (req.body.picture !== null) {
                    if (first === false) {
                        q = q + 'picture = ' + req.body.picture;
                        first = true;
                    } else {
                        q = q + ' AND picture = ' + req.body.picture;
                    }
                }
                if (req.body.occupants !== null) {
                    if (first === false) {
                        q = q + 'occupants = ' + req.body.occupants;
                        first = true;
                    } else {
                        q = q + ' AND occupants = ' + req.body.occupants;
                    }
                }
                if (req.body.beds !== null) {
                    if (first === false) {
                        q = q + 'beds = ' + req.body.beds;
                        first = true;
                    } else {
                        q = q + ' AND beds = ' + req.body.beds;
                    }
                }
                if (req.body.baths !== null) {
                    if (first === false) {
                        q = q + 'baths = ' + req.body.baths;
                        first = true;
                    } else {
                        q = q + ' AND baths = ' + req.body.baths;
                    }
                }
                if (req.body.squareFeet !== null) {
                    if (first === false) {
                        q = q + 'squareFeet = ' + req.body.squareFeet;
                        first = true;
                    } else {
                        q = q + ' AND squareFeet = ' + req.body.squareFeet;
                    }
                }
                if (req.body.rooms !== null) {
                    if (first === false) {
                        q = q + 'rooms = ' + req.body.rooms;
                        first = true;
                    } else {
                        q = q + ' AND rooms = ' + req.body.rooms;
                    }
                }
                if (req.body.kitchen !== null) {
                    if (first === false) {
                        q = q + 'kitchen = ' + req.body.kitchen;
                        first = true;
                    } else {
                        q = q + ' AND kitchen = ' + req.body.kitchen;
                    }
                }
                if (req.body.laundry !== null) {
                    if (first === false) {
                        q = q + 'laundry = ' + req.body.laundry;
                        first = true;
                    } else {
                        q = q + ' AND laundry = ' + req.body.laundry;
                    }
                }
                if (req.body.floor !== null) {
                    if (first === false) {
                        q = q + 'floor = ' + req.body.floor;
                        first = true;
                    } else {
                        q = q + ' AND floor = ' + req.body.floor;
                    }
                }
                if (req.body.pets !== null) {
                    if (first === false) {
                        q = q + 'pets = ' + req.body.pets;
                        first = true;
                    } else {
                        q = q + ' AND pets = ' + req.body.pets;
                    }
                }
                if (req.body.poBox !== null) {
                    if (first === false) {
                        q = q + 'poBox = ' + req.body.poBox;
                        first = true;
                    } else {
                        q = q + ' AND poBox = ' + req.body.poBox;
                    }
                }
                if (req.body.studyRooms !== null) {
                    if (first === false) {
                        q = q + 'studyRooms = ' + req.body.studyRooms;
                        first = true;
                    } else {
                        q = q + ' AND studyRooms = ' + req.body.studyRooms;
                    }
                }
                if (req.body.roomStyle !== null) {
                    if (first === false) {
                        q = q + 'roomStyle = ' + req.body.roomStyle;
                        first = true;
                    } else {
                        q = q + ' AND roomStyle = ' + req.body.roomStyle;
                    }
                }
                if (req.body.gym !== null) {
                    if (first === false) {
                        q = q + 'gym = ' + req.body.gym;
                        first = true;
                    } else {
                        q = q + ' AND gym = ' + req.body.gym;
                    }
                }
                if (req.body.pool !== null) {
                    if (first === false) {
                        q = q + 'pool = ' + req.body.pool;
                        first = true;
                    } else {
                        q = q + ' AND pool = ' + req.body.pool;
                    }
                }
                if (req.body.ac !== null) {
                    if (first === false) {
                        q = q + 'ac = ' + req.body.ac;
                        first = true;
                    } else {
                        q = q + ' AND ac = ' + req.body.ac;
                    }
                }
                if (req.body.heat !== null) {
                    if (first === false) {
                        q = q + 'heat = ' + req.body.heat;
                        first = true;
                    } else {
                        q = q + ' AND heat = ' + req.body.heat;
                    }
                }

                q = q + ' WHERE u_id = ' + req.session.id + ' AND a_id = ' + req.body.a_id;
                connection.query(q, function(err, results, fields) {
                    if (err) throw err;
                    else {
                        res.status(200).send('Successfully updated apartment listing');
                    }
                });
            } else {
                res.status(404).send("You are not authorized to edit this");
            }
        });
    //}
});

//create event
app.post('/events', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be loggined in to view this");
	//} else {
        connection.query('SELECT e_id FROM events ORDER BY DESC LIMIT 1', function(err, results, fields) {
    	    var e_id = results[0].e_id + 1;
	        connection.query('INSERT INTO events VALUES(? ? ? ?);', [e_id, req.sessions.id, req.body.details, req.body.date], function(err, results, fields) {
        	    if (err) throw err;
        	    else {
        	        res.status(200).send("Successfully added event");
        	    }
    	    });
        });
	//}
});

//edit event
app.post('/user/event/edit', (req, res) => {
    //if (!req.session.loggedin) {
    //  res.status(404).send("You must be logged in to edit this");
    //} else {
        connection.query('SELECT * FROM events WHERE e_id = ?', [req.body.e_id], function(err, results, fields) {
            if (err) throw err;
            else if (results[0].u_id === req.session.id) {
                var q = 'UPDATE events SET ';
                var first = false;

                if (req.body.details !== null) {
                    if (first === false) {
                        q = q + 'details = ' + req.body.details;
                        first = true;
                    } else {
                        q = q + ' AND details = ' + req.body.details;
                    }
                }
                if (req.body.date !== null) {
                    if (first === false) {
                        q = q + 'date = ' + req.body.date;
                        first = true;
                    } else {
                        q = q + ' AND date = ' + req.body.date;
                    }
                }
                if (req.body.picture !== null) {
                    if (first === false) {
                        q = q + 'picture = ' + req.body.picture;
                        first = true;
                    } else {
                        q = q + ' AND picture = ' + req.body.picture;
                    }
                }

                q = q + ' WHERE owner = ' + req.session.id + ' AND e_id = ' + req.body.e_id;
                connection.query(q, function(err, results, fields) {
                    if (err) throw err;
                    else {
                        res.status(200).send('Successfully updated apartment listing');
                    }
                });
            } else {
                res.status(404).send("You are not authorized to edit this");
            }
        });
    //}
});

//create notification
app.post('/notifications', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be loggined in to view this");
	//} else {
        connection.query('INSERT INTO notifications VALUES(? ? ?);', [req.body.to_u_id, req.session.id, req.body.notification], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send("Successfully added notification");
            }
        });
	//}
});

//add to attending
app.post('/events/:e_id?/attending', (req, res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
        connection.query('INSERT INTO attending VALUES(? ?);', [req.params.e_id, req.session.id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send("Successfully added attending");
            }
        });
    //}
});

//add to previous rents
app.post('/apartments/:a_id?/prevRents', (req, res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
	    connection.query('SELECT u_id FROM aProfiles WHERE a_id = ?', [req.params.a_id], function(err, results, fields) {
		    if (err) throw err;
		    else if (results[0].u_id === req.session.id) {
       			connection.query('INSERT INTO prevRents VALUES(? ?);', [req.params.a_id, req.body.rent], function(err, results, fields) {
            		if (err) throw err;
            		else {
                		res.status(200).send("Successfully added rent");
            		}
        		});
		    } else {
			    res.status(404).send("You don't have authorization to do this");
		    }
	    });
    //}
});





/* 
 * The following section contains delete requests for various data
 */

//delete notification
app.delete('/user/notification', (req, res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
        connection.query('DELETE FROM notifications WHERE to_u_id = ?', [req.session.id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send('Successfully removed notifications');
            }
        });
    //}
});

//delete account
app.delete('/user/account', (req, res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
        //wtf do
    //}
});

//delete apt listing
app.delete('/apartment/:id?',(req,res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
        var aid = req.params.id;
        connection.query('SELECT u_id FROM aProfiles WHERE a_id = ?', [aid], function(err, results, fields) {
            if (err) throw err;
            else if (results[0].u_id === req.session.id) {
                connection.query('DELETE FROM prevRents WHERE a_id = ?', [aid], function(err, results, fields) {
                    if (err) throw err;
                    else {
                        connection.query('DELETE FROM aProfiles WHERE a_id = ?',[aid],function(err,results,fields) {
                            if (err) throw err;
                            else {
                                res.status(200).send('Successfully move listing');
                            }
                        });
                    }
                });
            } else {
                res.status(404).send("You don't have access to delete this");
            }
        });
    //}
});

//delete event
app.delete('/user/:eid?', (req, res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
        var eid = req.params.eid;
        connection.query('SELECT u_id FROM events WHERE e_id = ?', [eid], function(err, results, fields) {
            if (err) throw err;
            else if (results[0].u_id === req.session.u_id) {
                connection.query('DELETE FROM attending WHERE e_id = ?', [eid], function(err, results, fields) {
                    if (err) throw err;
                    else {
                        connection.query('DELETE FROM events WHERE e_id = ?', [eid], function(err, results, fields) {
                            if (err) throw err;
                            else {
                                res.status(200).send('Successfully deleted event');
                            }
                        });
                    }
                });
            } else {
                res.status(404).send("You don't have access to delete this");
            }
        });

    //}
});

//delete attending your event
app.delete('/user/:eid?/attending', (req, res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
        var eid = req.params.eid;
        connection.query('SELECT u_id FROM events WHERE e_id = ?', [eid], function(err, results, fields) {
            if (err) throw err;
            else if (results[0].u_id === req.session.id) {
                connection.query('DELETE FROM attending WHERE e_id = ? AND u_id = ?', [eid, req.session.id], function(err, results, fields) {
                    if (err) throw err;
                    else {
                        res.status(200).send('Successfully deleted attending member');
                    }
                });
            } else {
                res.status(404).send("You don't have access to delete this");
            }
        });

    //}
});

//delete attending to your event
app.delete('/events/:eid?/attending', (req, res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
        var eid = req.params.eid;
        connection.query('SELECT u_id FROM events WHERE e_id = ?', [eid], function(err, results, fields) {
            if (err) throw err;
            else if (results[0].u_id === req.session.id) {
                connection.query('DELETE FROM attending WHERE e_id = ? AND u_id = ?', [eid, req.body.uid], function(err, results, fields) {
                    if (err) throw err;
                    else {
                        res.status(200).send('Successfully deleted attending member');
                    }
                });
            } else {
                res.status(404).send("You don't have access to delete this");
            }
        });

    //}
});
