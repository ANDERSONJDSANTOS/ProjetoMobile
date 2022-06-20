const app = require('../../../utils/app_for_test');
const mongoose = require('mongoose');

const req = require('supertest');

var tagId = '';
var token = '';
var passwordId = '';

beforeAll(async () => {
  await mongoose.connect(process.env.CONNECTION_URL);
  await createUserAndLogin();
  await createATag();
});


afterAll(async () => {
  await req(app)
    .delete(`/tag/${tagId}`)
    .set('Authorization', token);

  await req(app)
    .delete('/users')
    .set('Authorization', token);

  await req(app)
    .delete(`/passwords/${passwordId}`)
    .set('Authorization', token);
  
  await mongoose.disconnect();
});


test('Update a password', async () => {
  await createAPassword();
  
  let res = await req(app)
    .put(`/passwords/${passwordId}`)
    .set('Authorization', token)
    .send({name:'kkkccc', url:'kk', password:'12'})
  
  expect(res.status).toBe(200);
  
  res = await req(app)
    .get(`/passwords/${passwordId}`)
    .set('Authorization', token)

  expect(res.body.name).toBe('kkkccc');
  expect(res.body.url).toBe('kk');
  expect(res.body.password).toBe('12');
});


async function createUserAndLogin() {
  const user = {
    email:'dxcxz4x444d@gmail.com',
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


async function createATag() {
  const tagData = {
    name:'assa',
    icon:'spotify',
    background:'purple'
  }

  let res = await req(app)
    .post('/tags')
    .set('Authorization', token)
    .send(tagData)
  
  res = await req(app)
    .get('/tags')
    .set('Authorization', token)
  
  tagId = res.body[0].id;
}


async function createAPassword() {
  const passwordData = {
    name:'xcxcccc',
    password:'123456789',
    url:'skaodksad0210',
    tagId:tagId
  }

  let res = await req(app)
    .post('/passwords')
    .set('Authorization', token)
    .send(passwordData)

  expect(res.status).toBe(201);

  res = await req(app)
    .get('/passwords')
    .set('Authorization', token)
    .send({ tagId:tagId })
  
  passwordId = res.body[0].id;
}