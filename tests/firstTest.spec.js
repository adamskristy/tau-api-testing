//Chapter 1 Intro to SuperTest

//setup express server
const express = require('express');

const request = require('supertest');
//supertest is a node.js library to test APIs
//pass http.server or function to request(supertest)

const expect = require('chai').expect;
const { describe } = require('mocha');

//create express app
const app = express();

//requests to app
app.get('/first', (err, res) => {
    res.status(200).json({"ok": "response"})
})

//setup test
describe('First test', () => {
    it('OK response', () => {
        request(app)
        //request on internal or external API
        .get('/first')
        //tells supertest using HTTP GET
        .end((err, res) => {
            //end finalizes request and calls API server
            //requires callback function
            expect(res.statusCode).to.be.equal(200);
            //chai assertions to test status code
        
        })
    })

    //using mocky to generate custom HTTP responses
    it('Mocky OK response', (done) => {
        request('https://run.mocky.io')
        .get('/v3/84d41514-ab12-4acf-a89a-9b5df673e539')
        .expect(200, done);
    } )
})