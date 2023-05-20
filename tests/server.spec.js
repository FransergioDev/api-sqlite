const request = require('supertest');
//const server = require('../src/server');
//import server from '../src/server';


describe('Test my app server', () => {
    it('should get main route', async ()  => {
        const res = await request('http://localhost:3000').get('/');
        expect(res.status).toBe(200);
        expect(res.body).toEqual("API de Contatos em NodeJS, Express e SqLite. Versão: 1");
    })
});