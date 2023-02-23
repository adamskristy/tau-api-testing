//Chapter 2 GET Request

const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;


describe('get requests', () => {
    it('get course id', () => {
        request(app)
        .get('/course/1')
        //pass in route
        .end((err, res) => {
            expect(res.body.id).to.be.equal('1');
            //route param is a string
        })
    })

    //testing query params
    // localhost/course?name=mocha
    it('get query param name', (done) => {
        //done lets mocha know to wait for function to be called to complete the test??
        request(app)
        .get('/course')
        //pass in route
        .query({ 'name' : 'mocha'})
        //pass key and value within query as object
        .expect(200, {id: '1', name: 'mocha'}, done);
        //pass body and callback
    })
})