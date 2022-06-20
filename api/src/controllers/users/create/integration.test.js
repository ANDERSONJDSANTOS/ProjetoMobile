const app = require('../../../utils/app_for_test');
const mongoose = require('mongoose');

const req = require('supertest');
const user = {
  name:'axaxaxa',
  email:'sqsqs@gmail.com',
  password:'kosakdoksaod'
}
let token = '';

beforeAll(async () => {
  await mongoose.connect(process.env.CONNECTION_URL);
});


afterAll(async () => {
  await loginUser();
  await req(app)
    .delete('/users')
    .set("Authorization", token);
  await mongoose.disconnect();
});


test('Create an user', async () => {
  const res = await req(app)
    .post('/users')
    .send(user);
  expect(res.status).toBe(201);
});


test('Send an email that already exists', async () => {
  const res = await req(app)
    .post('/users')
    .send(user);

  const emailAlreadyExists = 'Esse email já está sendo utilizado';
  const error = res.body;

  expect(error).toBe(emailAlreadyExists);
  expect(res.status).toBe(400);
});


async function loginUser() {
  token = (await req(app).post('/users/login').send({
    email:user.email, 
    password:user.password
  })).body.token;
}