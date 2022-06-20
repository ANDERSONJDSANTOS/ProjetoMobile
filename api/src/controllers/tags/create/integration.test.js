const app = require('../../../utils/app_for_test');
const mongoose = require('mongoose');

const req = require('supertest');

const tagData = {
  name:'aksofkasf',
  icon:'home',
  background:'red'
}

var tagId = '';
var token = '';

beforeAll(async () => {
  await mongoose.connect(process.env.CONNECTION_URL);
  await createUserAndLogin();
});


afterAll(async () => {
  await req(app)
    .delete(`/tag/${tagId}`)
    .set('Authorization', token);

  await req(app)
    .delete('/users')
    .set('Authorization', token);
  
  await mongoose.disconnect();
});


test('Create tag', async () => {
  let res = await req(app)
    .post('/tags')
    .set('Authorization', token)
    .send(tagData)
  expect(res.status).toBe(201);
  
  res = await req(app)
    .get('/tags')
    .set('Authorization', token)
  
  tagId = res.body[0].id;
});


async function createUserAndLogin() {
  const user = {
    email:'zxc@gmail.com',
    name:'kaso3300',
    password:'391491921421'
  }

  await req(app)
    .post('/users')
    .send(user);
  
  token = (
    await req(app)
      .post('/users/login')
      .send({ email:user.email, password:user.password })
  ).body.token;
}