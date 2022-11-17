const request = require('supertest')
const app = require('../app')
const data = require('../database')
const port = 5000;
let api;

const testData = data[0];

beforeAll(() => {
    api = app.listen(port, () => {
        console.log(`test server running on port ${port}`)
    })
})

afterAll(done => {
    console.log('Stopping Server')
    api.close(done)
})

describe('Search Tests', () => {

    it('responds to get "/" with 200', done => {
        request(api).get('/')
        .expect(200, done)
    });

    it('responds to /data with 200', (done) => {
        request(api).get('/google/data')
        .expect(200, done)
    });

    it('gets data by search term', (done) => {
        request(api).get('/google/clothes')
        .expect(200)
        .expect(testData, done)
    });

    it('responds to invalid search with 404', (done) => {
        request(api).get('/google/cars')
        .expect(404,done)
    });
})
