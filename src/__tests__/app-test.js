const request = require('supertest');
const app = require('../app')
describe('Test the plus function', () => {
    test('1+1 should be equel 2', async () => {
        const response = await request(app).get('/plus').query({ first_number: "1", second_number: "1" });
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("1+1=2");
    });
    test('7, x should be 500 Internal server error', async () => {
        const response = await request(app).get('/plus').query({ first_number: "7", second_number: "x" });
        expect(response.statusCode).toBe(500);
        expect(response.text).toBe("Internal server error");
    });
})