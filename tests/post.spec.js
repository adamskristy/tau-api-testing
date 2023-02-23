//Chapter 2 POST request

// const app = require('../src/app');
// const request = require('supertest');
// const expect = require('chai').expect;

// describe('Post request', () => {
//     it('json response', () => {
//         request(app)
//         .post('/course')
//          //url we are posting against
//         .send({ "name": "supertest" })
//         //data thats being sent
//         .set('Accept', 'application/json')
//         //specify accept header
//         .end((err, res) => {
//             expect(res.body.name).to.be.equal('supertest');
//             //checking that body return 'supertest'
//         })
//     })

//     it('form response', (done) => {
//         request(app)
//         .post('/course')
//         .send('name=supertest')
//         //pass a string as form object??
//         .set('Accept', 'application/x-www-form-urlencoded')
//         //set accept header
//         .expect(200, { "id": "2", "name": "supertest"}, done);
//         //passing whole response to check against
//     })
// });


// Post request
// ✔ json response
// TypeError: Cannot read properties of undefined (reading 'name')

// 1) Post request
// json response:
// Uncaught AssertionError: expected undefined to equal 'supertest'

// 2) Post request
// form response:
// Error: expected 200 "OK", got 500 "Internal Server Error"