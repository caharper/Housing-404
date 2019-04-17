'use strict';

const Hapi = require('hapi');
const crypto = require('crypto');
const jwtplugin = require('hapi-auth-jwt2');
const JWT = require('jsonwebtoken');
const key = 'illneverbearobdeniroformejoepesciisfine';

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8080;

var connection = mysql.createPool({
    host: 'housing404.csegpu8i3kxk.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'housing404',
    password: 'housingpass',
    database: 'room404',
    multipleStatements: true
});

//cookies?

function getToken(email, password) {
    const user = {
        Email: email,
        Password: password
    };

    const newtoken = JWT.sign(user, key);
    return newtoken;
}

const validate = function(decoded, request, callback) {
    let query = "SELECT SessionID FROM Sessions WHERE email = \'" + decoded.Email +
        "\' AND Password = \'" + decoded.Password + "\'";

    connection.query(query, function(err, results, fields) {
        if (err)
            throw err;

        console.log(results);

        if (results[0].SessionId != null) {
            console.log("returned true");
            return callback(null, true);
        } else {
            console.log("returned false");
            return callback(null, false);
        }
    });
};

const server = new Hapi.Server();
server.connection({
    port: 300,
    host: '0.0.0.0',
    routes: {
        cors: true
    }
});

var prom = new Promise(function (resolve, reject) {
    server.register(jwtplugin);
    resolve();
}).then(getAuthStrategy)
    .then(serverStart)
    .then(getRoutes);

function getAuthStrategy() {
    return new Promise(function (resolve, reject) {
        server.auth.strategy('jwt', 'jwt', {
            key : 'illneverbearobdeniroformejoepesciisfine',
            validateFunc: validate
        });

        server.auth.default('jwt');
        resolve();
    });
}

function serverStart() {
    return new Promise(function (resolve, reject) {
        server.start((err) => {
            if (err) {
                throw err;
            }
            console.log('Server running at: $(server.info.uri)');
            resolve();
        });
    });
}

function routing() {
    server.route({
        method: 'POST',
        path: '/createAccount',
        config: {auth: false},
        handler: function (req, res) {
            let name = req.payload['name'];
            let email = req.payload['email'];
            //let id = assign ID
            let hashedPW = crypto.createHash('SHA256').update(Password).digest("hex");


            let userTableInfo = 'INSERT INTO users (id, name, email, hashedPW)';
            userTableInfo += "VALUES (" + id + "\', \'" + name + "\', \'" 
                + email + "\', \'" + hashedPW + ")";

            connection.getConnection(function (err, connection) {
                connection.query(userTableInfo, function(error, r1, fields) {
                    if (error) throw error;
                    //other query for making user profile?
                    connection.release();
                });
            });

        }
    });

    server.route({
        method: 'POST',
        path: '/login',
        config: {auth: false},
        handler: function(req, rep) {
            let email = req.payload['email'];
            let password = req.payload['password'];
            let hashedPW = crypto.createHash('SHA256').update(Password).digest("hex");

            let query = 'SELECT * FROM users WHERE email = "' + email + '"AND password = "' + hashedPW + '"';
            connection.getConnection(function (err, connection) {
                connection.query(query, function(error, results, fields) {
                    if (error) throw error;

                    if (results !== undefined) {
                        loginMessage.name = results[i].name;
                    } else {
                        loginMessage.name = -1;
                    }

                    if (loginMessage.name != -1) {
                        let SessionId = aguid();
                        let query1 = 'INSERT INTO Sessions (SessionId, email, password) VALUES ("'
                            + SessionId + '", "' + email + '","' + hashedPW + '")';
                        
                        connection.query(query1, function (error, results, fields) {
                            if (error) throw error;
                            var token = getToken(email, hashedPW);
                            reply(loginMessage).header("Authorization", token);
                        });
                    } else {
                        reply(loginMessage);
                    }
                });
                connection.release();
            });
        }
    });

}