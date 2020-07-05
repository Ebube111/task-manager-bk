const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: "ebube",
        email: "ebubeagwaze@example.com",
        password: "Mypass666"
    }).expect(201)
})