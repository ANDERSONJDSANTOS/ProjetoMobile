const app = require('../../../utils/app_for_test');
const mongoose = require('mongoose');

const req = require('supertest');

const tagData = {
  name:'mmm',
  icon:'photo',
  background:'blue'
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


test('update tag', async () => {
  let res = await req(app)
    .post('/tags')
    .set('Authorization', token)
    .send(tagData);

  res = await req(app)
    .get('/tags')
    .set('Authorization', token)
  tagId = res.body[0].id;
  
  res = await req(app)
    .put(`/tags/${tagId}`)
    .set('Authorization', token)
    .send({ name:'jack', icon:'home', background:'yellow' });
  expect(res.status).toBe(200);
  
  res = await req(app)
    .get('/tags')
    .set('Authorization', token)
  
  expect(res.body[0].name).toBe('jack');
  expect(res.body[0].background).toBe('yellow');
  expect(res.body[0].icon).toBe('home')
});


async function createUserAndLogin() {
  const user = {
    email:'aksoxdas55@gmail.com',
    name:'kasoss3300',
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