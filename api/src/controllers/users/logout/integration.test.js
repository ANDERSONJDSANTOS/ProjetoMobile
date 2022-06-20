const app = require('../../../utils/app_for_test');
const mongoose = require('mongoose');

const req = require('supertest');
const user = {
  name:'aksofkasf',
  email:'osakdoas@gmail.com',
  password:'kosakdoksaod'
}
let token = '';

beforeAll(async () => {
  await mongoose.connect(process.env.CONNECTION_URL);
  await req(app).post('/users').send(user);
  await loginUser();
});


afterAll(async () => {
  await loginUser();
  await req(app)
    .delete('/users')
    .set("Authorization", token);
  await mongoose.disconnect();
});


test('logout an user', async () => {
  const res = await req(app)
    .delete('/users/logout')
    .set("Authorization", token);
  expect(res.status).toBe(204);
});


async function loginUser() {
  token = (await req(app).post('/users/login').send({
    email:user.email, 
    password:user.password
  })).body.token;
}