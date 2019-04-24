var express = require('express');
var path = require('path');
var cors = require('cors');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
//var random = require('random');

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
    host: 'housing404.csegpu8i3kxk.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'housing404',
    password: 'housingpass',
    database: 'room404'
});



connection.connect(function(err) {
    if (err) {
        console.log("error connecting" + err);
        return;
    } else {
        console.log("Connected");
    }
});

app.listen(port, () => {
    console.log('Simple Example');
});


app.get('/test/:userid?',(req, res) => {
	var id = req.params.userid;
	connection.query('SELECT * FROM users WHERE id = ?', [id], function(err, results, fields) {
		if (err) throw err;
		else {
			res.send(results);
		}
	});
});


//Login function
app.post('/users/login', (req, res) => {
    //take u and p from front
    var user_email_temp = req.body.email;
    //let user_password = req.body.password;
    var hashedPW = crypto.createHash('SHA256').update(req.body.password).digest("hex");
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
    var hashed = crypto.createHash('SHA256').update(req.body.password).digest("hex");
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

//gets
//view your profile

//get user data
app.get('/user/profile', (req, res) => {
   // if(!req.session.loggedin) {
   //     res.status(404).send("You must be logged in to view this");
   // } else {
        console.log("User ", req.session.user_id, " is checking profile"); //console log to check
        connection.query('SELECT * FROM users NATURAL JOIN uProfiles WHERE id = ?', [req.session.user_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        }); //possibly limit what is selected
   // }
});

//view list profiles

app.get('/users', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be logged in to view this");
	//} else {
		console.log("User ", req.session.user_id, " is checking profiled");
		connection.query('SELECT * FROM uProfiles', function(err, results, fields){
			if (err) throw err;
			else {
				res.status(200).send(results);
			}
		});
	//}
});


//view specific profiles

app.get('/users/:uid?', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be logged in to see this");
	//} else {
		var uid = req.params.uid;
		console.log("User ", req.session.user_id, " is checking a profile");
		connection.query('SELECT * FROM uProfiles WHERE id = ?', [uid], function(err, results, fields){
			if (err) throw err;
			else {
				res.status(200).send(results);
			}
		});
	//}
});


//view list your attending events
app.get('/user/attending/events', (req, res) => {
    // if(!req.session.loggedin) {
    //     res.status(404).send("You must be logged in to view this");
    // } else {
         console.log("User ", req.session.user_id, " is checking their events"); //console log to check
         connection.query('SELECT * FROM users JOIN events ON users.id = events.attending WHERE id = ?', [req.session.user_id], function(err, results, fields) {
             if (err) throw err;
             else {
                 res.status(200).send(results);
             }
         });
     //}
 });

//view notifications

//get notifications
app.get('/user/notifications', (req, res) => {
   // if(!req.session.loggedin) {
   //     res.status(404).send("You must be logged in to view this");
   // } else {
        console.log("User ", req.session.user_id, " is checking notifications"); //console log to check
        connection.query('SELECT * FROM users JOIN notifications ON users.id = notifications.to_u_id WHERE id = ?', [req.session.user_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        }); //possibly limit what is selected
    //}
});


//view your listings
app.get('/user/listing', (req, res) => {
    // if(!req.session.loggedin) {
    //     res.status(404).send("You must be logged in to view this");
    // } else {
         console.log("User ", req.session.user_id, " is checking their listings"); //console log to check
         connection.query('SELECT * FROM users JOIN aProfiles ON users.id = aProfiles.u_id WHERE id = ?', [req.session.user_id], function(err, results, fields) {
             if (err) throw err;
             else {
                 res.status(200).send(results);
             }
         }); //possibly limit what is selected
     //}
 });

//view all listings

//get aparments
app.get('/apartments', (req, res) => {
   // if(!req.session.loggedin) {
   //     res.status(404).send("You must be logged in to view this");
   // } else {
        console.log("User ", req.session.user_id, " is checking apartments"); //console log to check
        connection.query('SELECT * FROM aProfiles', function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        }); //possibly limit what is selected
   // }
});


//view specific listings

app.get('/apartments/:aId?', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be logged in to view this");
	//} else {
		var aid = req.params.aId;
		console.log('User', req.session.user_id, "is checking an apartment");
		connection.query('SELECT * FROM aProfiles WHERE a_id = ?', [aid], function(err, results, fields) {
			if (err) throw err;
			else {
				res.status(200).send(results);
			}
		});
	//}
});


//view previous rents for a listing
app.get('/apartments/pastRents/:aId?', (req, res) => {
    // if(!req.session.loggedin) {
    //     res.status(404).send("You must be logged in to view this");
    // } else {
        var aid = req.params.aId;
         console.log("User ", req.session.user_id, " is checking notifications"); //console log to check
         connection.query('SELECT rent FROM aProfiles JOIN prevRents ON aProfiles.a_id = prevRents.a_id WHERE aProfiles.a_id = ? >', [aid], function(err, results, fields) {
             if (err) throw err;
             else {
                 res.status(200).send(results);
             }
         }); //possibly limit what is selected
     //}
 });

//view your event
app.get('/user/profile', (req, res) => {
    // if(!req.session.loggedin) {
    //     res.status(404).send("You must be logged in to view this");
    // } else {
         console.log("User ", req.session.user_id, " is checking their events"); //console log to check
         connection.query('SELECT * FROM users NATURAL JOIN events ON users.id = events.owner WHERE id = ?', [req.session.user_id], function(err, results, fields) {
             if (err) throw err;
             else {
                 res.status(200).send(results);
             }
         }); //possibly limit what is selected
    // }
 });

//view all events

//get events
app.get('/events', (req, res) => {
   // if(!req.session.loggedin) {
   //     res.status(404).send("You must be logged in to view this");
   // } else {
        console.log("User ", req.session.user_id, " is checking events"); //console log to check
        connection.query('SELECT * FROM events', function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        }); //possibly limit what is selected
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
        }); //possibly limit what is selected
    //}
});












//puts/posts
//edit profile
//create listing
app.post('/user/apartments', (req, res) => {
	//if (!req.session.loggedin) {
	//	res.status(404).send("You must be loggined in to view this");
	//} else {
        var a_id = 999 //replace with auto increment


        console.log("User ", req.session.user_id, " is adding a listing");
        
        connection.query('insert into aProfiles values(? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?)'[a_id, req.session.user_id, req.body.location,
        req.body.rent, req.body.leaseTime, req.body.description, req.body.picture, req.body.picture, req.body.occupants, req.body.beds,
        req.body.baths, req.body.squareFeet, req.body.rooms, req.body.kitchen, req.body.laundry, req.body.floor, req.body.pets, 
        req.body.poBox, req.body.studyRooms, req.body.roomStyle, req.body.gym, req.body.pool, req.body.ac, req.body.pool], function(err, results, fields){
			if (err) throw err;
			else {
				res.status(200).send(results);
			}
		});
	//}
});
//edit apt listing
//create event
app.post('/events', (req, res) => {

    console.log("User ", req.session.user_id, " is adding attendance"); //console log to check
    connection.query('INSERT INTO events VALUES(? ? ? ?);', [req.params.e_id, req.sessions.owner, req.params.details, req.params.date], function(err, results, fields) {
        if (err) throw err;
        else {
            res.status(200).send(results);
        }
    });

})

//edit event
//create notification
app.post('/notifications/', (req, res) => {

    console.log("User ", req.session.user_id, " is adding attendance"); //console log to check
    connection.query('INSERT INTO events VALUES(? ? ?);', [req.params.to_u_id, req.sessions.from_u_id, req.params.notification], function(err, results, fields) {
        if (err) throw err;
        else {
            res.status(200).send(results);
        }
    });

})

//add to attending
app.post('/events/:e_id?/attending', (req, res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
        console.log("User ", req.session.user_id, " is adding attendance"); //console log to check
        connection.query('INSERT INTO attending VALUES(? ?);', [req.params.e_id, req.sessions.user_id], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
    //}
});

//add to previous rents
app.post('/apartments/:a_id?:rent?/prevRents', (req, res) => {
    //if(!req.session.loggedin) {
    //    res.status(404).send("You must be logged in to view this");
    //} else {
        console.log("User ", req.session.user_id, " is adding rents to prevRents" ); //console log to check
        connection.query('INSERT INTO prevRents VALUES(? ?);', [req.params.a_id, req.params.rent], function(err, results, fields) {
            if (err) throw err;
            else {
                res.status(200).send(results);
            }
        });
    //}
});




//deletes
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
