// tests/unit/get.test.js

const request = require('supertest');

const app = require('../../src/app');
var tmp = [];

describe('GET /v1/fragments', () => {
  // If the request is missing the Authorization header, it should be forbidden
  test('unauthenticated requests are denied', () => request(app).get('/v1/fragments').expect(401));

  // If the wrong username/password pair are used (no such user), it should be forbidden
  test('incorrect credentials are denied', () =>
    request(app).get('/v1/fragments').auth('invalid@email.com', 'incorrect_password').expect(401));

  // Using a valid username/password pair should give a success result with a .fragments array
  test('authenticated users get a fragments array', async () => {
    const res = await request(app).get('/v1/fragments').auth('user1@email.com', 'password1');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(Array.isArray(res.body.fragments)).toBe(true);
  });

  test('authenticated users get a fragments array expanded', async () => {
    const res1 = await request(app)
      .post('/v1/fragments')
      .auth('user1@email.com', 'password1')
      .set('Content-Type', 'text/plain')
      .send('This is a fragment');
    tmp.push(res1.body.fragment.id);

    const res2 = await request(app)
      .post('/v1/fragments')
      .auth('user1@email.com', 'password1')
      .set('Content-Type', 'text/markdown')
      .send('# This is a fragment');

    tmp.push(res2.body.fragment.id);
    console.log(tmp);

    const res = await request(app)
      .get('/v1/fragments/?expand=1')
      .auth('user1@email.com', 'password1');
    //console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(Array.isArray(res.body.fragments)).toBe(true);
  });

  test('authenticated users retrieve fragments by id', async () => {
    //console.log('tmp: ' + tmp);
    const res = await request(app)
      .get('/v1/fragments/' + tmp[0])
      .auth('user1@email.com', 'password1');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('authenticated users retrieve fragments by id info', async () => {
    console.log('tmp: ' + tmp[0]);
    const res = await request(app)
      .get('/v1/fragments/' + tmp[0] + '/info')
      .auth('user1@email.com', 'password1');
    //console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('authenticated users retrieve fragments by id extension with HTML extension', async () => {
    const res = await request(app)
      .get('/v1/fragments/' + tmp[0] + '.html')
      .auth('user1@email.com', 'password1');
    //console.log(res.text);
    expect(res.type).toBe('text/html');
    expect(res.statusCode).toBe(200);
  });

  test('authenticated users retrieve fragments by id extension with markdown (MD) ', async () => {
    const res = await request(app)
      .get('/v1/fragments/' + tmp[1] + '.html')
      .auth('user1@email.com', 'password1');
    //console.log(res.text);
    expect(res.type).toBe('text/html');
    expect(res.statusCode).toBe(200);
  });
  // TODO: we'll need to add tests to check the contents of the fragments array later
});
