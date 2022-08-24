import * as http from 'http';
import * as api from './api.js';

const ROUTES = {
    ABSENSES: '/absences',
    MEMBERS: '/members'
};

http.createServer((req, res) => {
    // to avoid CORS issues
    const headers = {
        'Access-Control-Allow-Origin': '*',           
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // for 30 days
    };
    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }
    if (req.url == ROUTES.ABSENSES && req.method == 'GET') {
        api.absences().then((results) => {
            headers['Content-Type'] = 'application/json';
            res.writeHead(200, headers);
            res.write(JSON.stringify(results));
            res.end();
        }).catch((err) => {
            res.writeHead(403);
            res.write(JSON.stringify(err));
            res.end();
        })
    }
    else if (req.url == ROUTES.MEMBERS && req.method == 'GET') {
        api.members().then((results) => {
            headers['Content-Type'] = 'application/json';
            res.writeHead(200, headers);
            res.write(JSON.stringify(results));
            res.end();
        }).catch((err) => {
            res.writeHead(403);
            res.write(JSON.stringify(err));
            res.end();
        })
    } else {
        res.writeHead(400);
        res.write(`Available routes -> ${ROUTES.ABSENSES} and ${ROUTES.MEMBERS}`);
        res.end();
    }
}).listen(3030, ()=> {
    console.log("Absence manager server running on port 3030");
});