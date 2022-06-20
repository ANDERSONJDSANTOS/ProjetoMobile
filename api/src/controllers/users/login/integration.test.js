const app = require('../../../utils/app_for_test');
const mongoose = require('mongoose');

const req = require('supertest');
const user = {
  name:'dsaxa',
  email:'ccc@gmail.com',
  password:'sads45456465a'
}
let token = '';

beforeAll(async () => {
  await mongoose.connect(process.env.CONNECTION_URL);
  await req(app).post('/users').send(user);
});


afterAll(async () => {
  await req(app)
    .delete('/users')
    .set("Authorization", token);
  await mongoose.disconnect();
});


describe("Test errors when trying to login", () => {

  test("Email that doens't exists", async () => {
    const data = { email:'aks@gmail.com', password:'123456789' };
    const res = await req(app)
      .post('/users/login')
      .send(data)

    const error = res.body;
    const emailDoesntExists = 'Esse email não existe';

    expect(error).toBe(emailDoesntExists);
  });
});


test('Wrong password', async () => {
  const data = { email:user.email, password:'ksadosakfmb4.' };
  const res = await req(app)
    .post('/users/login')
    .send(data)

  const error = res.body;
  const wrongPassword = 'Senha errada';

  expect(error).toBe(wrongPassword);
});


test('Login an user', async () => {
  const data = { email:user.email, password:user.password };
  const res = await req(app)
    .post('/users/login')
    .send(data)

  expect(res.status).toBe(201);
  expect(res.body.token).toBeTruthy();
  token = res.body.token;
});