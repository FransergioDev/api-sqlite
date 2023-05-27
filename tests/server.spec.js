//const request = require('supertest');
//const server = require('../src/server');
import request from 'supertest';
import app from './../src/app.js';

beforeAll(() => {
    request.agent(app.listen());
});
describe('Test my app server', () => {
    it('should get main route', async ()  => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.text).toEqual("API de Contatos em NodeJS, Express e SqLite. Versão: 1")
        //console.log('res', res);
        /*expect(res.body).toMatchObject({
            id: 2
        })*/
    });
    it('should get main route contacts have items', async ()  => {
        const res = await request(app).get('/v1/contacts');
        expect(res.status).toBe(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    mail: expect.any(String),
                    address: expect.any(String),
                    telephone: expect.any(Number),
                    cellphone: expect.any(Number)
                }),
            ])
        );
    });

});