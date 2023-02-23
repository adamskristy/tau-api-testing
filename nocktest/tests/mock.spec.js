//Chapter 4 Nock
//Nock is a HTTP server mocking and expectations library for Node.js

//intercept every call to request url and reply with "status"

//Why?
//to test the interaction with our API up until the point where we send the request, or by testing components, which rely on the API response

const nock = require('nock');
const request = require('supertest');
const expect = require('chai').expect;

describe('mock response', () => {
    //this will run before each test in describe block
    beforeEach(() => {
        nock('http://localhost:4000')
        //the url we want to intercept
        .get('/users')
        //the type of request to intercept
        .reply(200, {
        //use reply return mock object and response
            "users" : [{ "id": "1"}]
        });
    })

    it('nock intercepts', () => {
        request('http://localhost:4000')
        .get('/users')
        .end((err, res) => {
            expect(res.body.users[0].id).to.be.equal("1")
        });
    });
})